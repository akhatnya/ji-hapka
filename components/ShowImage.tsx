
import axios from "axios";
import { exitCode } from "process";
import { useEffect, useState } from "react";
import { ThumbImage } from "../components";
import { Title20 } from "../Typography";

const ShowImage = (props: any) => {
    const download = async (objectUrl: any) => {
        await axios({
            url: objectUrl,
            method: "GET",
            responseType: "blob", // important
            onDownloadProgress: (progressEvent: any) => {
                setPercentage(Math.round((progressEvent.loaded * 100) / progressEvent.total));
            },
            
        })
    }

    const [percentage, setPercentage]: any = useState(0);
    const [downloading, setDownloading]: any = useState(null);
    
    const { backgroundImage, className } = props;
    const [withMobileModal, setWithMobileModal]: any = useState(null);
    const [isAndroid, setIsAndroid]: any = useState(null);
    const [isDesktop, setIsDesktop]: any = useState(null);

    useEffect(() => {
        setWithMobileModal(props.device.isMobile());
        setIsAndroid(props.device.isAndroid());
        setIsDesktop(props.device.isDesktop());
    }, []);

    return (
        <div className={`image-full-show ${className}`}>
            <div className="big-image">
                <div className="img" style={{ backgroundImage: `${backgroundImage}` }}></div>
                <div className="action">
                    <a rel="ar" href={ !isAndroid ? 
                            props.objUrl : 
                            `intent://arvr.google.com/scene-viewer/1.0?file=${props.gltfUrl}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;` 
                        } 
                        id="clickMeAgain"
                        onClick={async (evt: any) => { 
                            if (downloading == null) {
                                await download(props.objUrl); 
                                setDownloading(true);
                            }
                        }}
                        className="btn btn-white btn-44">
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
  
