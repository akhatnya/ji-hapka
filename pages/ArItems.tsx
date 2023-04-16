import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Card, Breadcrumbs } from "../components";
import { useBasketStore } from "../providers/RootStoreProvider";
import { loadWith3d } from "../src/requests/requests";
import { Title24 } from "../components/Typography";
import { API_STORAGE } from "../src/consts";

const ArItems = (props: any) => {
  const { itemsReq } = props;
  const store = useBasketStore();
  const [items, setItems]: any = useState(itemsReq);

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Breadcrumbs
              main="Примерить мебель с AR"
              isMain={true}
              className="pb-24 mb-24"
            />

            <Title24 title="Примерьте в комнате" className="mb-32" />
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
                      title={i.name}
                      backgroundImage={`url(${API_STORAGE}${i.image[0]}`}
                      price={i.price}
                      key={index}
                      priceSale={i.price * 0.95}
                    />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context: any) => {
  return {
    props: {
      itemsReq: await loadWith3d((r: any) => r.data),
    },
  };
};

export default observer(ArItems);
