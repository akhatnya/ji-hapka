import { Button } from "../components";

const Banner = () => {
  return (
    <div className="banner w-100-400">
        <div className="banner-text">
          <h1>Jihaz AR</h1>
          <p>Примерьте мебель<br/>у себя в комнате</p>
          <Button iconRight={true} sizeIcon="28" svgIcon="/images/icons/AR-28.svg#root" title="Примерить мебель" className="btn btn-primary btn-54" />
        </div>
        <div className="banner-img" style={{ backgroundImage: "url(../images/banners/banner.png)"}}>
          <img src="images/banners/phone-hand.png" />
        </div>
    </div>
  );
}

export default Banner;
