import { Rate } from "../components";

interface TitleProps {
    title: string;
    description: string;
    link: string;
    className: string;
    rateActive: boolean;
    rateNum: number;
}
  
  const DescriptionInLine = (props: TitleProps) => {
    const { title, description, link, className, rateActive, rateNum } = props;
    return (
        <div className={`desc-list ${className}`}>
            <span className="left">{title}</span>
            <span className="right">
                {description} 
                <a href="#!" className="btn btn-auto-link">{link}</a>
                {
                    rateActive && 
                    <Rate rating={rateNum} />
                }
            </span>
        </div>
    );
  };
  
  export default DescriptionInLine;
  