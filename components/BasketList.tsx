import { observer } from "mobx-react-lite";
import { Quantity, Button } from "../components";
import React from 'react';
import { kzt } from "../utils/globalUtils";

interface BasketListProps {
    title: string;
    price: string;
    backgroundImage: string;
    className: string;
    inRight: boolean;
    inBlock: boolean;
    item: any;
    store: any;
    fav?: any;
  }
const BasketList  = (props: BasketListProps) => {
    const {store, item, title, price, backgroundImage, className, inRight, inBlock, fav } = props;
  return (
    <div  className={`basket-list ${className}`}>
        
        <div className="basket-left">
            <div className="basket-img" style={{ backgroundImage: `${backgroundImage}` }}></div>
        </div>
        <div className="basket-right">
            <span className="text">{title}</span>
            <div className="price-quantity">
                <span className="price">{kzt(price)}</span>
                {
                  !fav && (
                    <Quantity store={store} jihaz={item} title={item.quantity} className="" />
                  )
                }
            </div>
            {
              inRight && 
              <div className="add-btns-inner">
                <Button onClick={() => {store.deleteAllJihazType(item.id)}} iconLeft={true} sizeIcon="16" svgIcon="/images/icons/trash-16.svg#root" title="Удалить" className="btn btn-secondary-hb third-color btn-32" />
                <Button iconLeft={true} sizeIcon="16" svgIcon="/images/icons/heart-16.svg#root" title="Добавить в избранное" className="btn btn-secondary-hb btn-32" />
              </div>
            }
              {
          inBlock && 
          <div className="add-btns-inner">
            <Button onClick={() => {store.deleteFavorite(item.id)}} iconLeft={true} sizeIcon="16" svgIcon="/images/icons/trash-16.svg#root" title="Удалить" className="btn btn-secondary-hb third-color btn-40" />
            <Button onClick={() => {store.addJihaz(item), store.setFav(), store.setBasket()}} iconLeft={true} sizeIcon="24" svgIcon="/images/icons/cart-badge-plus-24.svg#root" title="Добавить в корзину" className="btn btn-secondary-hb btn-40" />
          </div>
        }
        </div>
        
    </div>
  );
}

export default observer(BasketList);
