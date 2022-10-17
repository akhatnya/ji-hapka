
import { ThumbImage } from "../components";
import { Title20 } from "../Typography";


interface ShowImageProps {
    backgroundImage: string;
    className: string;
}
  
  const ShowImage = (props: ShowImageProps) => {
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
                    <a href="/images/STBEBR001BLU-UK-MDL-CM-USDZ.usdz" className="btn btn-white btn-44">
                        Закрыть
                        <svg height="24" width="24">
                            <use href={`/images/icons/close-24.svg#root`}></use>
                        </svg>
                    </a>
                </div>

                    
                <div className="qr-code">
                    <div className="qr-code-inner">
                        <Title20 title="Отсканируйте QR" className="" />
                        <Title20 title="и примерьте мебель в комнате" className="mb-24" />
                        <img src="images/qr-code.png" />
                    </div>
                </div>
            </div>
            <div className="thumb-image">
                <ThumbImage activeImage="active" thumbImage={'url(../images/products/product-3-thumb-1.png'} />
                <ThumbImage activeImage="" thumbImage={'url(../images/products/product-3-thumb-1.png'} />
                <ThumbImage activeImage="" thumbImage={'url(../images/products/product-3-thumb-1.png'} />
                <ThumbImage activeImage="" thumbImage={'url(../images/products/product-3-thumb-1.png'} />
                <ThumbImage activeImage="" thumbImage={'url(../images/products/product-3-thumb-1.png'} />
                <ThumbImage activeImage="" thumbImage={'url(../images/products/product-3-thumb-1.png'} />
            </div>
        </div>
    );
  };
  
  export default ShowImage;
  