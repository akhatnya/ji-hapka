import { observer } from "mobx-react-lite";
import { SideBar } from "../components";
import { useBasketStore } from "../providers/RootStoreProvider";

const Basket  = () => {

  const store = useBasketStore();

  const styles = {
    position: 'fixed',
    top: '0',
    right: '0',
    backgroundColor: 'linear-gradient(270deg, rgba(2, 18, 43, 0.5) 0%, rgba(16, 26, 43, 0.5) 100%)',
    width: '100%',
    height: '100%'
  }
    
  return (
    <>
      {
        store.isBasketOpen ? (
          <div className="mobile-scroll">
          <div className="mobile-scroll-inner">
            <div className="scroll-close"></div>
            <div className="basket" style={{
              position: 'fixed',
              top: '0',
              right: '0',
              background: 'linear-gradient(270deg, rgba(2, 18, 43, 0.5) 0%, rgba(16, 26, 43, 0.5) 100%)',
              width: '100%',
              height: '100%',
              zIndex: 1
              }}>
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
