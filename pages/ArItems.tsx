import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Card, Category, Breadcrumbs } from "../components";
import { useBasketStore } from "../providers/RootStoreProvider";
import { loadRooms, loadItemsByRoomId } from "../src/requests/requests";
import { url } from "../src/urls";
import { Title24 } from "../Typography";

const ArItems = (props: any) => {
    const store = useBasketStore();

    const [items, setItems]: any = useState(props.items);

    return (
    <div className='page-wrapper'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs className="pb-24 mb-24"/>

                    <Title24 title="Примерьте в комнате" className="mb-32" />
                    <div className="grid-max">
                        {
                            items?.map((i: any, index: any) => {
                                return (
                                            <span>
                                                <Card 
                                                    device={props.device}
                                                    store={store}
                                                    item={i}
                                                    href={`/catalog/product/${i.item.id}`}
                                                    index={index}
                                                    title={i.item.nameRu} 
                                                    backgroundImage={`url(${i.itemPhotos[0]?.photo.url}`}
                                                    price={i.item.price}
                                                    key={index}
                                                    priceSale={i.item.price * 0.95}
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

export const getStaticProps = async (context: any) => {
    return {
        props: {
            items: await (await fetch(url(`/items/with3d`))).json()
        }
    }
}

export default observer(ArItems);
