import { observer } from "mobx-react-lite";
import { SideBar } from "../components";
import { useBasketStore } from "../providers/RootStoreProvider";

const Basket  = () => {

  const store = useBasketStore();
    
  return (
    <>
      {
        store.isBasketOpen ? (
          <div className="mobile-scroll">
          <div className="mobile-scroll-inner">
            <div className="scroll-close"></div>
            <div className="basket">
                <SideBar store={store} className="active"/>
            </div>
          </div>
        </div>
        ) : null
      }
    </>
  );
}

export default observer(Basket);
