import axios from "axios";
import { useEffect, useState } from "react";
import { ThumbImage } from "../components/CustomComponents";
import { Title20 } from "./Typography";
import { API_STORAGE } from "../src/consts";
import ReactGA from "react-ga";
import Image from "next/image";

const ShowImage = (props: any) => {
  const download = async (objectUrl: any) => {
    await axios({
      url: objectUrl,
      method: "GET",
      responseType: "blob", // important
      onDownloadProgress: (progressEvent: any) => {
        setPercentage(
          Math.round((progressEvent.loaded * 100) / progressEvent.total)
        );
      },
    });
  };

  const [percentage, setPercentage]: any = useState(0);
  const [downloading, setDownloading]: any = useState(null);

  const { backgroundImage, className } = props;
  const [withMobileModal, setWithMobileModal]: any = useState(null);
  const [isAndroid, setIsAndroid]: any = useState(null);
  const [isDesktop, setIsDesktop]: any = useState(null);
  const [isQr, setIsQr]: any = useState(false);

  useEffect(() => {
    setWithMobileModal(props.device.isMobile());
    setIsAndroid(props.device.isAndroid());
    setIsDesktop(props.device.isDesktop());
  }, []);

  const onClose = () => {
    ReactGA.event({
      category: "Tap_closing_themodal",
      action: `Tap_closing_themodal1`,
    });
    setWithMobileModal(false);
  };

  return (
    <div className={`image-full-show ${className}`}>
      <div className="big-image">
        <div
          className="img"
          style={{ backgroundImage: `${backgroundImage}` }}
        ></div>
        <div className="action">
          {isQr ? (
            <button
              onClick={() => setIsQr(false)}
              className="btn btn-white btn-44"
            >
              Закрыть
              <svg height="24" width="24">
                <use href={`/images/icons/close-24.svg#root`}></use>
              </svg>
            </button>
          ) : (
            <button
              id="clickMeAgain"
              onClick={async (evt: any) => {
                ReactGA.event({
                  category: "Tap_try_ontheroom",
                  action: `Tap_try_ontheroom1`,
                });
                if (isDesktop) {
                  setIsQr(true);
                } else {
                  console.log(props, "props");
                  !isAndroid
                    ? window.open(
                        API_STORAGE + props.objUrl[0]?.download_link,
                        "_blank"
                      )
                    : window.open(
                        `intent://arvr.google.com/scene-viewer/1.0?file=${
                          API_STORAGE + props.gltfUrl[0]?.download_link
                        }#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;`,
                        "_blank"
                      );
                  if (downloading == null) {
                    await download(props.objUrl);
                    setDownloading(true);
                  }
                }
              }}
              className="btn btn-white btn-44"
            >
              <svg height="33" width="33">
                <use href={`/images/icons/AR.svg#root`}></use>
              </svg>
              Примерить в комнате
            </button>
          )}
        </div>

        {!isDesktop ? (
          <div className="frst-time-modal">
            <div className="frst-time-modal-inner">
              <Title20
                title="Примерьте эту мебель у себя в комнате"
                className=""
              />

              <svg onClick={onClose} height="24" width="24">
                <use href={`/images/icons/close-24-current.svg#root`}></use>
              </svg>
            </div>
          </div>
        ) : isQr ? (
          <div className="qr-code">
            <div className="qr-code-inner">
              <Title20 title="Отсканируйте QR" className="" />
              <Title20 title="и примерьте мебель в комнате" className="mb-24" />
              <img src="/images/qr-code.png" alt="qr" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="thumb-image">
        {props.images?.map((img: any, index: any) => {
          return (
            <ThumbImage
              key={index}
              activeImage={props.curImage === img ? "active" : ""}
              thumbImage={`url(${API_STORAGE}${img}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowImage;
