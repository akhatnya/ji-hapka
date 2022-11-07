import React from "react";
import { BasketList, Button, NavArrow, CardSame } from "../components";
import { Title20, SubTitle16 } from "../Typography";
import { AddCommentInner } from "../containers";
import { observer } from "mobx-react-lite";


interface SideBarProps {
    className: string;
    store: any;
}
const SideBar  = (props: SideBarProps) => {
    const { className, store } = props;
  return (
    <div style={{zIndex: 2}}  className={`sidebar ${className}`}>

        <div className="sidebar-inner">

            <div className="sidebar-header mb-24">
                <Title20 title="Товар в корзине" className=""/>
                <button onClick={() => store.setBasket()} className="btn-close">
                    <svg height="24" width="24">
                        <use href={`/images/icons/Close_S.svg#root`}></use>
                    </svg>
                </button>
            </div>
            
            <AddCommentInner store={store} />
            
            {/* <div className="sidebar-body "> */}

                {/* ЧИТАЙ ЭТО: Короче эта ситуация со скринами в избранных, если не понятно как статусы меняются то лучше звони или пиши
                Такая ситуация тут что empty класс дается когда прям нет товаров тут */}

                {/* <div className="basket-inner-empty">
                    <SubTitle16 title="У Вас ещё нет избранных товаров" className="third-color" />
                </div> */}


                {/* ЧИТАЙ ЭТО: Избранное снизу */}
                {/* <div className="basket-inner-list mb-24">
                    <BasketList inBlock={true} inRight={false} className="add-btn-block" backgroundImage={'url(../images/products/product-2.png'} title="Трио стол журнальный" price="99 000" />
                    <BasketList inBlock={true} inRight={false} className="add-btn-block" backgroundImage={'url(../images/products/product-1.png'} title="Журнальный стол Фараон" price="220 000" />
                    <BasketList inBlock={true} inRight={false} className="add-btn-block" backgroundImage={'url(../images/products/product-2.png'} title="Трио стол журнальный" price="99 000" />
                </div> */}
                
            {/* </div> */}


            {/* <div className="sidebar-body">
                <div className="basket-inner-list mb-24">
                    <BasketList inBlock={false} inRight={false} className="" backgroundImage={'url(../images/products/product-2.png'} title="Трио стол журнальный" price="99 000" />
                    <BasketList inBlock={false} inRight={false} className="" backgroundImage={'url(../images/products/product-1.png'} title="Журнальный стол Фараон" price="220 000" />
                    <BasketList inBlock={false} inRight={false} className="" backgroundImage={'url(../images/products/product-2.png'} title="Трио стол журнальный" price="99 000" />
                </div>
                <div className="basket-total">
                    <span className="text">Итого 1 товар <br/> на сумму</span>
                    <span className="total-price h3-title">99 000 ₸</span>
                </div>

                <div className="basket-btns mb-40">
                    <Button title="Оформить заказ" className="btn btn-primary w-100 btn-54 mb-12" />
                    <Button title="Продолжить покупки" className="btn btn-secondary-nb w-100 btn-54" />
                </div>

                <div className="d-flex-al-center-space-between mb-32">
                    <Title20 title="Похожие товары" className=""/>
                    <NavArrow/>
                </div>
                <div className="same-products">
                    <div className="same-products-inner">
                        <CardSame 
                            title="Журнальный стол Фараон" 
                            backgroundImage={'url(../images/products/product-1.png'}
                            price={'4 790'}
                            priceSale={'6 490'}
                        />
                        <CardSame 
                            title="Журнальный стол Фараон" 
                            backgroundImage={'url(../images/products/product-1.png'}
                            price={'6 790'}
                        />
                        <CardSame 
                            title="Журнальный стол Фараон" 
                            backgroundImage={'url(../images/products/product-1.png'}
                            price={'6 790'}
                        />
                        <CardSame 
                            title="Журнальный стол Фараон" 
                            backgroundImage={'url(../images/products/product-1.png'}
                            price={'6 790'}
                        />
                        <CardSame 
                            title="Журнальный стол Фараон" 
                            backgroundImage={'url(../images/products/product-1.png'}
                            price={'6 790'}
                        />
                    </div>
                </div>
            </div> */}

        </div>
    </div>
  );
}

export default observer(SideBar);
