import { observer } from "mobx-react-lite";
import { SideBar } from "../components";
import BckDrp from "../components/CustomComponents/BckDrp";
import { useBasketStore } from "../providers/RootStoreProvider";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

const Basket = () => {
  const store = useBasketStore();
  const ref = useRef(null);

  const handleClickOutside = () => {
    store.setBasket(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <>
      {store.isBasketOpen ? (
        <>
          <div className="mobile-scroll">
            <div className="mobile-scroll-inner">
              <div className="scroll-close"></div>
              <div className="basket">
                <SideBar refProp={ref} store={store} className="active" />
                <BckDrp />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default observer(Basket);
