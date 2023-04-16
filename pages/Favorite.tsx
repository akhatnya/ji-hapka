import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { BasketList, SideBar } from "../components";
import { Button, BckDrp } from "../components/CustomComponents";
import { useBasketStore } from "../providers/RootStoreProvider";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import {
  SubTitle16,
  Title16,
  Title20,
  Title24,
} from "../components/Typography";

const Favorite = () => {
  const store = useBasketStore();
  const router = useRouter();
  const ref = useRef(null);

  const handleClickOutside = () => {
    store.setFav();
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <>
      {store.isFavOpen ? (
        <div className="mobile-scroll">
          <div className="mobile-scroll-inner">
            <div className="scroll-close"></div>
            <div className="basket">
              <div ref={ref} className={`sidebar active`}>
                <div className="sidebar-inner">
                  <div className="sidebar-header mb-24">
                    <Title20 title="Избранное" className="" />
                    <button
                      onClick={() => store.setFav()}
                      className="btn-close"
                    >
                      <svg height="24" width="24">
                        <use href={`/images/icons/Close_S.svg#root`}></use>
                      </svg>
                    </button>
                  </div>

                  <div
                    style={{
                      height: store.favorites.length === 0 ? "100%" : "",
                    }}
                    className="sidebar-body"
                  >
                    <div className="basket-inner-list mb-24">
                      {store.favorites.map((item: any, index: any) => {
                        return (
                          <BasketList
                            key={item.id}
                            store={store}
                            item={item}
                            inBlock={true}
                            inRight={false}
                            className="add-btn mb-24"
                            backgroundImage={`url(${item.image[0]})`}
                            title={item.name}
                            price={item.price}
                            fav={true}
                          />
                        );
                      })}
                    </div>
                    {store.favorites.length === 0 && (
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <p style={{ color: "darkgrey", fontSize: "16px" }}>
                          У Вас ещё нет избранных товаров
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <BckDrp />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default observer(Favorite);
