import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { BasketList, Button, SideBar } from "../components";
import { useBasketStore } from "../providers/RootStoreProvider";
import { SubTitle16, Title16, Title20, Title24 } from "../Typography";

const Favorite  = () => {

  const store = useBasketStore();
  const router = useRouter();

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
        store.isFavOpen ? (
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
                <div className={`sidebar active`}>

                <div className="sidebar-inner">

                    <div className="sidebar-header mb-24">
                        <Title20 title="Избранное" className=""/>
                        <button onClick={() => store.setFav()} className="btn-close">
                            <svg height="24" width="24">
                                <use href={`/images/icons/Close_S.svg#root`}></use>
                            </svg>
                        </button>
                    </div>
                    
                    <div style={{height: store.favorites.length === 0 ? '100%' : ''}} className="sidebar-body">
                        <div className="basket-inner-list mb-24">
                            {
                                store.favorites.map((item: any, index: any) => {
                                    return (
                                            <BasketList key={item.id}
                                              store={store}
                                              item={item} 
                                              inBlock={true} 
                                              inRight={false} 
                                              className="add-btn mb-24" 
                                              backgroundImage={`url(${item.itemPhotos[0].photo.url})`} 
                                              title={item.item.nameRu} 
                                              price={item.item.price}
                                              fav={true} />
                                    )
                                })
                            }
                            </div>
                            {
                                store.favorites.length === 0 && (
                                        <div style={{display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                                           <p style={{color: 'darkgrey', fontSize: '16px'}}>У Вас ещё нет избранных товаров</p>
                                        </div> 
                                )
                            }
        
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ) : null
      }
    </>
  );
}

export default observer(Favorite);
