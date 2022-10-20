import { Quantity, Button } from "../components";
interface BasketListProps {
  title: string;
  price: string;
  backgroundImage: string;
  className: string;
  inRight: boolean;
  inBlock: boolean;
}
const BasketList = (props: BasketListProps) => {
  const { title, price, backgroundImage, className, inRight, inBlock } = props;
  return (
    <div className={`basket-list ${className}`}>

      <div className="basket-left">
        <div className="basket-img" style={{ backgroundImage: `${backgroundImage}` }}></div>
      </div>
      <div className="basket-right">
        <span className="text">{title}</span>
        <div className="price-quantity">
          <span className="price">{price} ₸</span>
          <Quantity title="3" className="" />
        </div>
        {
          inRight &&
          <div className="add-btns-inner">
            <Button iconLeft={true} sizeIcon="16" svgIcon="/images/icons/trash-16.svg#root" title="Удалить" className="btn btn-secondary-hb third-color btn-32" />
            <Button iconLeft={true} sizeIcon="16" svgIcon="/images/icons/heart-16.svg#root" title="Добавить в избранное" className="btn btn-secondary-hb btn-32" />
          </div>
        }
      </div>

      {
        inBlock &&
        <div className="add-btns-inner">
          <Button iconLeft={true} sizeIcon="24" svgIcon="/images/icons/trash-24.svg#root" title="Удалить" className="btn btn-secondary-hb third-color btn-40" />
          <Button iconLeft={true} sizeIcon="24" svgIcon="/images/icons/cart-badge-plus-24.svg#root" title="Добавить в корзину" className="btn btn-secondary-hb btn-40" />
        </div>
      }

    </div>
  );
}

export default BasketList;
