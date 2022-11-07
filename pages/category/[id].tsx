import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Card, Category, Breadcrumbs } from "../../components";
import { useBasketStore } from "../../providers/RootStoreProvider";
import { loadCategories, loadItemsByCategoryId } from "../../src/requests/requests";
import { Title24 } from "../../Typography";

const CatInner = (props: any) => {
    const router = useRouter();
    const { id } = router.query;
    const store = useBasketStore();

    const [items, setItems]: any = useState([]);
    const [currentCategory, setCurrentCategory]: any = useState(id);
    const [categories, setCategories]: any = useState([]);

    useEffect(() => {
        loadCategories((response: any) => setCategories(response.data));
        setCurrentCategory(id);
    }, []);

    useEffect(() => {
        if (currentCategory) {
            loadItemsByCategoryId(currentCategory, (response: any) => setItems(response.data));
        }
    }, [currentCategory]);

  return (
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
                                            onClick={() => setCurrentCategory(i.category.id)}
                                            className={`${i.category.id}` == currentCategory ? "active" : ""} 
                                            title={i.category.nameRu} 
                                            key={index + "asd"}
                                            srcImage={i.category.smallLogoUrl} 
                                        />
                            })
                        }
                    </div>
                    <div className="grid-max">
                        {
                            items?.map((i: any, index: any) => {
                                return (
                                            <span>
                                                <Card 
                                                    store={store}
                                                    item={i}
                                                    href={`/catalog/product/${i.item.id}`}
                                                    index={index}
                                                    title={i.item.nameRu} 
                                                    backgroundImage={`url(${i.itemPhotos[0]?.photo.url}`}
                                                    price={i.item.price}
                                                    key={index}
                                                    priceSale={`${(i.item.price * 1.1).toFixed(0)}`}
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
  );
}

export default observer(CatInner);
