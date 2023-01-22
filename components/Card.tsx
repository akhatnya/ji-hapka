import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Rate, Button, ReviewQty } from "../components";
import { kzt } from "../utils/globalUtils";
import { useRouter } from "next/router";
import ReactGA from "react-ga";

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
  const [obj, setObj]: any = useState(null);
  const router = useRouter();
  useEffect(() => {
    setObj(store.favorites.find((i: any) => {return i.id === item.item.id}))
  }, [obj])

  const onClickItem = () => {
      ReactGA.event({
        category: "Tap_sales_hits",
        action: `Tap_sales_hits_${item.item.id}})}`,
      });
      router.push(href)
  }
  return (
    <div className="card">
        <div className="image-card">
            <span onClick={onClickItem}>
                <div className="img" style={{ backgroundImage: `${backgroundImage}` }}></div>
            </span>
            {
                store.favorites?.length === 0 ? (
                    <div onClick={() => {
                        ReactGA.event({
                            category: "Tap_likes",
                            action: `Tap_likes_${item.item.id}})}`,
                        });
                        store.addFavorite(item)
                    }} className="favorite">
                        <svg height="32" width="32"> 
                            <use href={`/images/icons/heart.svg#root`}></use>
                        </svg>
                    </div>
                ) : (
                    <div onClick={() => {
                        ReactGA.event({
                            category: "Tap_likes",
                            action: `Tap_likes_${item.item.id}})}`,
                        });
                        store.addFavorite(item)
                    }} className="favorite">
                        <svg height="32" width="32"> 
                            <use style={{color: obj ? 'red' : 'black'}} href={`/images/icons/heart.svg#root`}></use>
                        </svg>
                    </div>
                )
            }
            <div className="btn-3d">
                
                <a href={!props.device.isAndroid() ? props?.object3d : props?.objectGltf} rel="ar" className="btn btn-white btn-44">
                    <svg height="33" width="33">
                        <use href={`/images/icons/AR.svg#root`}></use>
                    </svg>
                    Примерить в комнате
                </a>
            </div>
        </div>
        <div className="text-card">
            <span onClick={onClickItem}>
            <div className="info">
                <h3>{title}</h3>
                <div className="price">
                    <span className="primary-price">{kzt(price)}</span>
                    <span className="sale-price">{kzt(priceSale)}</span>
                </div>
                {
                    props.rating ? 
                    <div className="rate-review ">
                        <Rate rating={props.rating} />
                        <ReviewQty num={`${props.ratingCount}`} className=""/>
                    </div> : null 
                }
            </div>
            </span>
            <div className="btn-action">
                <Button onClick={() => {
                    ReactGA.event({
                        category: "Tap_add_to_cart",
                        action: `Tap_add_to_cart_${item.item.id}})}`,
                    });
                    store.addJihaz(item); store.setBasket()
                }} iconLeft={true} sizeIcon="32" svgIcon="/images/icons/cart-badge-plus.svg#root" title="Добавить в корзину" className="btn btn-primary w-100 btn-54" />
            </div>
        </div>
    </div>

  );
}

export default observer(Card);
