import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Card, Category, Breadcrumbs } from "../../components";
import { useBasketStore } from "../../providers/RootStoreProvider";
import {
  loadItemsByCategoryId,
  loadCategories,
} from "../../src/requests/requests";
import { Title24 } from "../../components/Typography";
import { Layout } from "../../containers";
import { useRouter } from "next/router";
import ReactGA from "react-ga";
import translitRuEn from "../../utils/trans";
import { API_STORAGE } from "../../src/consts";

const CatInner = (props: any) => {
  const router = useRouter();
  const { id, itemsReq, categoriesReq } = props;
  const store = useBasketStore();

  const [items, setItems]: any = useState(itemsReq);
  const [currentCategory, setCurrentCategory]: any = useState(id);
  const [categories, setCategories]: any = useState(categoriesReq);

  const onClickCategory = (i: any) => {
    ReactGA.event({
      category: "Tap_category",
      action: `Tap_category_${translitRuEn(i.name)}`,
    });
    setCurrentCategory(i.id);
    loadItemsByCategoryId(i.id, (r: any) => setItems(r.data));
    router.push(`/category/${i.id}`);
  };

  return (
    <Layout
      title={`${
        categories.find((c: any) => c.id == id)?.name
      } 🛋 в Алматы в кредит и рассрочку - примерить в комнате и заказать онлайн в Jihaz AR`}
      description={`Купить ${
        categories.find((c: any) => c.id == id)?.name
      } 🛋 в Алматы ✅ Преимущества Jihaz AR: ✔100% соответствие цвета и размера ✔Быстрое решение по покупке мебели ✔Проверенные продавцы мебели. Выбирайте и примеряйте мебель в комнате с дополненной реальностью, Сравнивайте цены всех продавцов`}
      keywords="Мебель, примерка, диваны, дополненная реальность, 3D примерка, ковры, товары для дома"
    >
      <div className="page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Breadcrumbs
                main={categories.find((c: any) => c.id == id).name}
                isMain={true}
                className="pb-24"
              />

              <Title24 title="Примерить в комнате" className="mb-32" />
              <div className="cat-list mb-64">
                {categories.map((i: any, index: any) => {
                  return (
                    <Category
                      onClick={() => onClickCategory(i)}
                      className={`${i.id}` == currentCategory ? "active" : ""}
                      title={i.name}
                      key={index + "cat"}
                      srcImage={API_STORAGE + i.small_logo_url}
                    />
                  );
                })}
              </div>
              <div className="grid-max">
                {items?.map((i: any, index: any) => {
                  return (
                    <span key={index}>
                      <Card
                        device={props.device}
                        store={store}
                        item={i}
                        href={`/catalog/product/${i.id}`}
                        index={index}
                        object3d={i.object_3d}
                        gltf={i.object_gltf}
                        title={i.name}
                        backgroundImage={`url(${API_STORAGE}${i.image[0]})`}
                        priceSale={i.price}
                        key={index}
                        price={i.price * 0.95}
                      />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  return {
    props: {
      itemsReq: await loadItemsByCategoryId(
        context.query.id,
        (r: any) => r.data
      ),
      id: context.query.id,
      categoriesReq: await loadCategories((r: any) => r.data),
    },
  };
};

export default observer(CatInner);
