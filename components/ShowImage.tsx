
import { ThumbImage } from "../components";
import { Title20 } from "../Typography";


interface ShowImageProps {
    backgroundImage: string;
    className: string;
}
  
  const ShowImage = (props: any) => {
    const { backgroundImage, className } = props;
    return (
        <div className={`image-full-show ${className}`}>
            <div className="big-image">
                <div className="img" style={{ backgroundImage: `${backgroundImage}` }}></div>
                <div className="action">
                    <a href="/images/STBEBR001BLU-UK-MDL-CM-USDZ.usdz" className="btn btn-white btn-44">
                        <svg height="33" width="33">
                            <use href={`/images/icons/AR.svg#root`}></use>
                        </svg>
                        Примерить в комнате
                    </a>
                    {/* <a href="/images/STBEBR001BLU-UK-MDL-CM-USDZ.usdz" className="btn btn-white btn-44">
                        Закрыть
                        <svg height="24" width="24">
                            <use href={`/images/icons/close-24.svg#root`}></use>
                        </svg>
                    </a> */}
                </div>

                    
            </div>
            <div className="thumb-image">
                {
                    props.images?.map((img: any, index: any) => {
                        return <ThumbImage key={index} activeImage={props.curImage === img.photo.url ? "active" : ""} thumbImage={`url(${img.photo.url}`} />
                    })
                }
            </div>
        </div>
    );
  };
  
  export default ShowImage;
  