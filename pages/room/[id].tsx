import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Card, Category, Breadcrumbs } from "../../components";
import { useBasketStore } from "../../providers/RootStoreProvider";
import { loadRooms, loadItemsByRoomId } from "../../src/requests/requests";
import { Title24 } from "../../components/Typography";
import { Layout } from "../../containers";
import { API_STORAGE } from "../../src/consts";

const CatInner = (props: any) => {
  const router = useRouter();
  const { id } = router.query;
  const { roomsReq, itemsReq } = props;
  const store = useBasketStore();

  const [items, setItems]: any = useState(itemsReq);
  const [currentRoom, setCurrentRoom]: any = useState(id);
  const [rooms, setRooms]: any = useState(roomsReq);

  const onClickRoom = (i: any) => {
    setCurrentRoom(i.id);
    loadItemsByRoomId(id, (r: any) => setItems(r.data));
    router.push(`/room/${i.id}`);
  };

  return (
    <Layout
      title={`Мебель для комнаты ${
        rooms.find((c: any) => c.id == currentRoom)?.category?.name
      } 🛋 в Алматы в кредит и рассрочку - примерить в комнате и заказать онлайн в Jihaz AR`}
      description="Примерить и купить мебель 🛋 Преимущества Jihaz AR: ✔100% соответствие цвета и размера ✔Быстрое решение по покупке мебели ✔Проверенные продавцы мебели. Выбирайте и примеряйте мебель в комнате с дополненной реальностью, Сравнивайте цены всех продавцов"
      keywords="Мебель, примерка, диваны, дополненная реальность, 3D примерка, ковры, товары для дома"
    >
      <div className="page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Breadcrumbs
                main={rooms.find((c: any) => c.id == currentRoom).name}
                isMain={true}
                className="pb-24"
              />

              <Title24 title="Примерить в комнате" className="mb-32" />
              <div className="cat-list mb-64">
                {rooms.map((i: any, index: any) => {
                  return (
                    <Category
                      onClick={() => onClickRoom(i)}
                      className={`${i.id}` == currentRoom ? "active" : ""}
                      title={i.name}
                      key={index + "roomCat"}
                      srcImage={API_STORAGE + i.logo_url}
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
                        title={i.name}
                        object3d={i.object_3d}
                        gltf={i.object_ltf}
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
      roomsReq: await loadRooms((r: any) => r.data),
      itemsReq: await loadItemsByRoomId(context.query.id, (r: any) => r.data),
    },
  };
};

export default observer(CatInner);
