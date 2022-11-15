
import { Rate, Button } from "../components";
import { kzt } from "../utils/globalUtils";
interface CardProps {
  title: string;
  backgroundImage: string;
  price: string;
  priceSale?: string;
}
const CardSame  = (props: CardProps) => {
  const { title, backgroundImage, price, priceSale  } = props;
  return (
    
    <div className="card card-same">
        <div className="image-card">

            <div className="img" style={{ backgroundImage: `${backgroundImage}` }}></div>

            <div className="favorite">
                <svg height="16" width="16">
                    <use href={`/images/icons/heart-16.svg#root`}></use>
                </svg>
            </div>
                
        </div>
        <div className="text-card">
            <div className="info">
                <h3>{title}</h3>
                <div className="price">
                    <span className="primary-price">{kzt(price)}</span>
                    <span className="sale-price">{kzt(priceSale)}</span>
                </div>
                <Button iconLeft={false} sizeIcon="16" svgIcon="/images/icons/check-16.svg#root" title="Добавить" className="btn btn-secondary w-100 btn-36" />
            </div>
        </div>
    </div>

  );
}

export default CardSame;
