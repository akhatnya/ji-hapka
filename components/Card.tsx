import { Rate, Button, ReviewQty } from "../components";
interface CardProps {
  title: string;
  backgroundImage: string;
  priceSale: string;
  price: string;
  rating?: number;
  ratingCount?: number;
}
const Card  = (props: CardProps) => {
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
                    
                    <a href="intent://arvr.google.com/scene-viewer/1.0?file=https%3A%2F%2Fmedia.made.com%2F3dmodels%2FSOFTOB019BLU-UK%2Fsource%2FSOFTOB019BLU-UK-MDL-M-GLTF%2Fproduct.gltf&amp;title=Atkinson%203%20Seater%20Sofa%2C%20Navy%20Blue%20Recycled%20Velvet%20with%20Dark%20Wood%20Legs&amp;mode=ar_only#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://www.made.com/web-ar-not-supported;end;" className="btn btn-white btn-44">
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
