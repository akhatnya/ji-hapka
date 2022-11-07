import { observer } from "mobx-react-lite";
import Link from "next/link";
import { Rate, Button, ReviewQty } from "../components";
import { useBasketStore } from "../providers/RootStoreProvider";
interface CardProps {
  title: string;
  backgroundImage: string;
  priceSale: string;
  price: string;
  rating?: number;
  ratingCount?: number;
  href?: string;
  item: any;
  store: any;
}
const Card  = (props: any) => {
  const { href, title, backgroundImage, price, priceSale, item, store  } = props;
  return (
    
    <div className="card">
     <Link href={href}>
        <div className="image-card">
            <div className="img" style={{ backgroundImage: `${backgroundImage}` }}></div>
            <div className="actions">
                <div className="favorite">
                    <svg height="32" width="32">
                        <use href={`/images/icons/heart.svg#root`}></use>
                    </svg>
                </div>
                <div className="btn-3d">
                    
                    <a href={props?.object3d} className="btn btn-white btn-44">
                        <svg height="33" width="33">
                            <use href={`/images/icons/AR.svg#root`}></use>
                        </svg>
                        Примерить в комнате
                    </a>
                </div>
            </div>
        </div>
        </Link>
        <div className="text-card">
            <Link href={href}>
            <div className="info">
                <h3>{title}</h3>
                <div className="price">
                    <span className="primary-price">{price} ₸</span>
                    <span className="sale-price">{priceSale} ₸</span>
                </div>
                {
                    props.rating ? 
                    <div className="rate-review ">
                        <Rate rating={props.rating} />
                        <ReviewQty num={`${props.ratingCount}`} className=""/>
                    </div> : null 
                }
            </div>
            </Link>
            <div className="btn-action">
                <Button onClick={() => {store.addJihaz(item); store.setBasket()}} iconLeft={true} sizeIcon="32" svgIcon="/images/icons/cart-badge-plus.svg#root" title="Добавить в корзину" className="btn btn-primary w-100 btn-54" />
            </div>
        </div>
    </div>

  );
}

export default observer(Card);
