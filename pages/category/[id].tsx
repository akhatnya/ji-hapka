import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Card, Category, Breadcrumbs } from "../../components";
import { useBasketStore } from "../../providers/RootStoreProvider";
import { loadCategories, loadItemsByCategoryId } from "../../src/requests/requests";
import { url } from "../../src/urls";
import { Title24 } from "../../Typography";
import { Layout } from "../../containers";
import { useRouter } from "next/router";
import ReactGA from "react-ga";
import translitRuEn from '../../utils/trans';

const CatInner = (props: any) => {
    const router = useRouter();
    const { id, cat } = props;
    const store = useBasketStore();

    const [items, setItems]: any = useState(props.items);
    const [currentCategory, setCurrentCategory]: any = useState(id);
    const [categories, setCategories]: any = useState([]);

    useEffect(() => {
        setCategories(cat);
        setCurrentCategory(id);
    }, []);

    useEffect(() => {
        if (currentCategory) {
            loadItemsByCategoryId(currentCategory, (response: any) => setItems(response.data));
        }
    }, [currentCategory]);

    const onClickCategory = (i: any) => {
        ReactGA.event({
          category: "Tap_category",
          action: `Tap_category_${translitRuEn(i.category.nameRu)}`,
        });
        setCurrentCategory(i.category.id);
        router.push(`/category/${i.category.id}`)
    }

  return (
    <Layout
        title={`${categories?.find((c: any) => c.category.id == currentCategory)?.category?.nameRu} 🛋 в Алматы в кредит и рассрочку - примерить в комнате и заказать онлайн в Jihaz AR`}
        description={`Купить ${categories?.find((c: any) => c.category.id == currentCategory)?.category?.nameRu} 🛋 в Алматы ✅ Преимущества Jihaz AR: ✔100% соответствие цвета и размера ✔Быстрое решение по покупке мебели ✔Проверенные продавцы мебели. Выбирайте и примеряйте мебель в комнате с дополненной реальностью, Сравнивайте цены всех продавцов`}
        keywords="Мебель, примерка, диваны, дополненная реальность, 3D примерка, ковры, товары для дома, v1"
    >
        <div className='page-wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumbs className="pb-24 mb-24"/>

                        <Title24 title="Примерить в комнате" className="mb-32" />
                        <div className="cat-list mb-64">
                            {
                                categories.map((i: any, index: any) => {
                                    return <Category 
                                                onClick={() => onClickCategory(i)}
                                                className={`${i.category.id}` == currentCategory ? "active" : ""} 
                                                title={i.category.nameRu} 
                                                key={index + "cat"}
                                                srcImage={i.category.smallLogoUrl} 
                                            />
                                })
                            }
                        </div>
                        <div className="grid-max">
                            {
                                items?.map((i: any, index: any) => {
                                    return (
                                                <span key={index}>
                                                    <Card 
                                                        device={props.device}
                                                        store={store}
                                                        item={i}
                                                        href={`/catalog/product/${i.item.id}`}
                                                        index={index}
                                                        object3d={i.item.object3d}
                                                        gltf={i.item.objectGltf}
                                                        title={i.item.nameRu} 
                                                        backgroundImage={`url(${i.itemPhotos[0]?.photo.url}`}
                                                        priceSale={i.item.price}
                                                        key={index}
                                                        price={i.item.price * 0.95}
                                                    />
                                                </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </Layout>
  );
}

export const getServerSideProps = async (context: any) => {
    return {
        props: {
            items: await (await fetch(url(`/items/category/${context.query.id}`))).json(),
            id: context.query.id,
            cat: await (await fetch(url(`/categories-with-count`))).json(),
        }
    }
}

export default observer(CatInner);
