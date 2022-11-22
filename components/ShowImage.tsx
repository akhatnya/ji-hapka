
import { useState } from "react";
import { ThumbImage } from "../components";
import { Title20 } from "../Typography";

const ShowImage = (props: any) => {
    const { backgroundImage, className } = props;
    const [withMobileModal, setWithMobileModal]: any = useState(props.isMobile);

    return (
        <div className={`image-full-show ${className}`}>
            <div className="big-image">
                <div className="img" style={{ backgroundImage: `${backgroundImage}` }}></div>
                <div className="action">
                    <a href={ props.objUrl } rel="ar" className="btn btn-white btn-44">
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

                {
                    withMobileModal ?
                        <div className="frst-time-modal">

                            <div className="frst-time-modal-inner">

                                <Title20 title="Примерьте эту мебель у себя в комнате" className="" />

                                <svg onClick={() => setWithMobileModal(false)} height="24" width="24">
                                    <use href={`/images/icons/close-24-current.svg#root`}></use>
                                </svg>

                            </div>

                        </div> : null
                }

                    
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
  