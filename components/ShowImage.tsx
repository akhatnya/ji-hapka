import axios from "axios";
import { useEffect, useState } from "react";
import { ThumbImage } from "../components/CustomComponents";
import { Title20 } from "./Typography";
import { API_STORAGE } from "../src/consts";
import ReactGA from "react-ga";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
import { useBasketStore } from "../providers/RootStoreProvider";
import { useRouter } from "next/router";
import Image from "next/image";
import { download } from "../src/requests/requests";

const ShowImage = (props: any) => {
  const store = useBasketStore();
  const router = useRouter();
  const [openImg, setOpenImg]: any = useState("");
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpenImg(false));

  const [percentage, setPercentage]: any = useState(0);
  const [downloading, setDownloading]: any = useState(null);

  const { backgroundImage, className, curImage, setCurImage } = props;
  const [withMobileModal, setWithMobileModal]: any = useState(null);
  const [isAndroid, setIsAndroid]: any = useState(null);
  const [isDesktop, setIsDesktop]: any = useState(null);
  const [isQr, setIsQr]: any = useState(false);
  const [isClosed, setIsClosed]: any = useState(false);

  useEffect(() => {
    setWithMobileModal(props.device.isMobile());
    setIsAndroid(props.device.isAndroid());
    setIsDesktop(props.device.isDesktop());
  }, []);

  const onClose = () => {
    setIsClosed(true);
    ReactGA.event({
      category: "Tap_closing_themodal",
      action: `Tap_closing_themodal1`,
    });
    store.setCloseMobileModal();
  };

  const handleClickBgImg = (img: string) => {
    if (!isDesktop) {
      setOpenImg(img);
    }
  };

  const openFile = async (e: any) => {
    e.preventDefault();
    ReactGA.event({
      category: "Tap_try_ontheroom",
      action: `Tap_try_ontheroom1`,
    });
    console.log(props);
    if (isDesktop) {
      setIsQr(true);
    } else {
      if (!isAndroid) {
        router.push(API_STORAGE + props.objUrl[0]?.download_link);
      } else {
        router.push(
          `intent://arvr.google.com/scene-viewer/1.0?file=${
            API_STORAGE + props.gltfUrl[0]?.download_link
          }#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;`
        );
      }
      if (downloading == null) {
        download(props.objUrl, (progressEvent: any) => {
          setPercentage(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          );
        });
        setDownloading(true);
      }
    }
  };

  return (
    <div className={`image-full-show ${className}`}>
      <div className="big-image">
        <div
          className="img"
          style={{ backgroundImage: `url(${API_STORAGE}${backgroundImage})` }}
          onClick={() => handleClickBgImg(backgroundImage)}
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
            <a
              id="clickMeAgain"
              rel="ar"
              href="#"
              onClick={openFile}
              className="btn btn-white btn-44"
            >
              <img />
              <svg height="33" width="33">
                <use href={`/images/icons/AR.svg#root`}></use>
              </svg>
              Примерить в комнате
            </a>
          )}
        </div>
        {!isDesktop && !store.modalClose && !isClosed ? (
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
              <Image src="/images/qr-code.png" alt="qr" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="thumb-image">
        {props.images?.map((img: any, index: number) => {
          return !isDesktop && index === 0 ? null : (
            <ThumbImage
              key={index}
              activeImage={curImage === img ? "active" : ""}
              thumbImage={`url(${API_STORAGE}${img}`}
              onClick={() =>
                isDesktop ? setCurImage(img) : handleClickBgImg(img)
              }
            />
          );
        })}
      </div>
      {openImg && (
        <div className="big-image-full">
          <img ref={ref} src={API_STORAGE + openImg} alt="bg" />
        </div>
      )}
    </div>
  );
};

export default ShowImage;
