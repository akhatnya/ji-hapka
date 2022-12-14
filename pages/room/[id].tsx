import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Card, Category, Breadcrumbs } from "../../components";
import { useBasketStore } from "../../providers/RootStoreProvider";
import { loadRooms, loadItemsByRoomId } from "../../src/requests/requests";
import { Title24 } from "../../Typography";

const CatInner = (props: any) => {
    const router = useRouter();
    const { id } = router.query;
    const store = useBasketStore();

    const [items, setItems]: any = useState([]);
    const [currentRoom, setcurrentRoom]: any = useState(id);
    const [rooms, setrooms]: any = useState([]);

    useEffect(() => {
        loadRooms((response: any) => setrooms(response.data));
        setcurrentRoom(id);
    }, []);

    useEffect(() => {
        if (currentRoom) {
            loadItemsByRoomId(currentRoom, (response: any) => setItems(response.data));
        }
    }, [currentRoom]);

  return (
    <div className='page-wrapper'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs className="pb-24 mb-24"/>

                    <Title24 title="Примерить в комнате" className="mb-32" />
                    <div className="cat-list mb-64">
                        {
                            rooms.map((i: any, index: any) => {
                                return <Category 
                                            onClick={() => setcurrentRoom(i.category.id)}
                                            className={`${i.category.id}` == currentRoom ? "active" : ""} 
                                            title={i.category.nameRu} 
                                            key={index + "asd"}
                                            srcImage={i.category.logoUrl} 
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
                                                    title={i.item.nameRu} 
                                                    object3d={i.item.object3d}
                                                    gltf={i.item.objectGltf}
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
  );
}

export default observer(CatInner);
