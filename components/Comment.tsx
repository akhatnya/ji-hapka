
import { Rate, ThumbImage } from "../components";
import { SubTitle16 } from "../Typography";
interface CommentProps {
    name: string;
    description: string;
    className: string;
    imgComment?: boolean;
}
  
  const Comment = (props: CommentProps) => {
    const { name, description, className, imgComment } = props;
    return (
        <div className={`comment-list ${className}`}>
            <Rate rating={4} />
            <SubTitle16 title={name} className="third-color mb-12 mt-24"/>
            <SubTitle16 title={description} className="mb-24"/>
                {
                imgComment && 
                <div className="thumb-image">
                    <ThumbImage activeImage="" thumbImage={'url(../images/products/product-3-thumb-1.png'} />
                </div>
                }
        </div>
    );
  };
  
  export default Comment;
  