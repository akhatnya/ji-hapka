import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Card, Category, Breadcrumbs } from "../../components";
import { useBasketStore } from "../../providers/RootStoreProvider";
import { loadRooms, loadItemsByRoomId } from "../../src/requests/requests";
import { Title24 } from "../../Typography";
import { Layout } from "../../containers";

const CatInner = (props: any) => {
    const router = useRouter();
    const { id } = router.query;
    const store = useBasketStore();

    const [items, setItems]: any = useState([]);
    const [currentRoom, setcurrentRoom]: any = useState(id);
    const [rooms, setrooms]: any = useState([]);

    useEffect(() => {
        console.log(rooms,'asd')
        loadRooms((response: any) => setrooms(response.data));
        setcurrentRoom(id);
    }, []);

    useEffect(() => {
        if (currentRoom) {
            loadItemsByRoomId(currentRoom, (response: any) => setItems(response.data));
        }
    }, [currentRoom]);

  return (
    <Layout
        title={`Мебель для комнаты ${rooms.find((c: any) => c.category.id == currentRoom)?.category?.nameRu} 🛋 в Алматы в кредит и рассрочку - примерить в комнате и заказать онлайн в Jihaz AR`}
        description="Примерить и купить мебель 🛋 Преимущества Jihaz AR: ✔100% соответствие цвета и размера ✔Быстрое решение по покупке мебели ✔Проверенные продавцы мебели. Выбирайте и примеряйте мебель в комнате с дополненной реальностью, Сравнивайте цены всех продавцов"
        keywords="Мебель, примерка, диваны, дополненная реальность, 3D примерка, ковры, товары для дома"
    >
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
    </Layout>
  );
}

export default observer(CatInner);
