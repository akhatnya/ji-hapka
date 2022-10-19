import { Rate, Button, ReviewQty } from "../components";
interface CardProps {
  title: string;
  backgroundImage: string;
  priceSale: string;
  price: string;
  rating?: number;
  ratingCount?: number;
}
const Card  = (props: any) => {
  const { title, backgroundImage, price, priceSale  } = props;
  return (
    
    <div className="card">
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
        <div className="text-card">
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
            <div className="btn-action">
                <Button iconLeft={true} sizeIcon="32" svgIcon="/images/icons/cart-badge-plus.svg#root" title="Добавить в корзину" className="btn btn-primary w-100 btn-54" />
            </div>
        </div>
    </div>

  );
}

export default Card;
