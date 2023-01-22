import { Rate } from "../components";
import { useRouter } from "next/router";
import ReactGA from "react-ga";
import translitRuEn from '../utils/trans';

interface TitleProps {
    id?: any;
    title: string;
    description: string;
    link: string;
    className: string;
    rateActive: boolean;
    rateNum: number;
}
  
  const DescriptionInLine = (props: TitleProps) => {
    const { title, description, link, className, rateActive, rateNum } = props;
    const router = useRouter();

    const onClickShop = (id: any) => {
        ReactGA.event({
          category: "Tap_sellers_page",
          action: `Tap_popular_categories_${link}`,
        });
        router.push(`/shop/${id}`)
    }

    return (
        <div className={`desc-list ${className}`}>
            <span className="left">{title}</span>
            <span className="right">
                {description} 
                <a onClick={() => onClickShop(props.id)} className="btn btn-auto-link">{link}</a>
                {
                    rateActive && 
                    <Rate rating={rateNum} />
                }
            </span>
        </div>
    );
  };
  
  export default DescriptionInLine;
  