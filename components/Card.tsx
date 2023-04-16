import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Rate, ReviewQty } from "../components";
import { Button } from "../components/CustomComponents";
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
const Card = (props: any) => {
  const { href, title, backgroundImage, price, priceSale, item, store } = props;
  const [obj, setObj]: any = useState(null);
  const router = useRouter();
  useEffect(() => {
    setObj(
      store.favorites.find((i: any) => {
        return i.id === item.id;
      })
    );
  }, [obj]);

  const onClickItem = () => {
    ReactGA.event({
      category: "Tap_sales_hits",
      action: `Tap_sales_hits_${item.id}})}`,
    });
    router.push(href);
  };
  const onClickUse = () => {
    props.device.isDesktop()
      ? onClickItem()
      : !props.device.isAndroid()
      ? router.push(props?.object_3d)
      : router.push(props?.object_gltf);
  };

  return (
    <div className="card">
      <div className="image-card">
        <span onClick={onClickItem}>
          <div
            className="img"
            style={{ backgroundImage: `${backgroundImage}` }}
          ></div>
        </span>
        <div
          onClick={() => {
            ReactGA.event({
              category: "Tap_likes",
              action: `Tap_likes_${item.id}})}`,
            });
            store.addFavorite(item);
          }}
          className="favorite"
        >
          <svg height="32" width="32">
            <use
              href={`/images/icons/heart${
                store.favorites?.filter((f: any) => f.id === item.id).length > 0
                  ? "-fill.svg#root"
                  : ".svg#root"
              }`}
            ></use>
          </svg>
        </div>
        <div className="btn-3d">
          <button onClick={onClickUse} className="btn btn-white btn-44">
            <svg height="33" width="33">
              <use href={`/images/icons/AR.svg#root`}></use>
            </svg>
            Примерить в комнате
          </button>
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
            {props.rating ? (
              <div className="rate-review ">
                <Rate rating={props.rating} />
                <ReviewQty num={`${props.ratingCount}`} className="" />
              </div>
            ) : null}
          </div>
        </span>
        <div className="btn-action">
          <Button
            onClick={() => {
              ReactGA.event({
                category: "Tap_add_to_cart",
                action: `Tap_add_to_cart_${item.id}})}`,
              });
              store.addJihaz(item);
              store.setBasket(true);
            }}
            iconLeft={true}
            sizeIcon="32"
            svgIcon="/images/icons/cart-badge-plus.svg#root"
            title="Добавить в корзину"
            className="btn btn-primary w-100 btn-54"
          />
        </div>
      </div>
    </div>
  );
};

export default observer(Card);
