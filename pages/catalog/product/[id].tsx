import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { ShowImage, Breadcrumbs, Rate, ReviewQty } from "../../../components";
import { Button } from "../../../components/CustomComponents";
import { Layout } from "../../../containers";
import { useBasketStore } from "../../../providers/RootStoreProvider";
import { url } from "../../../src/urls";
import { Title20, DescriptionInLine } from "../../../components/Typography";
import { kzt } from "../../../utils/globalUtils";
import ReactGA from "react-ga";
import { API_STORAGE } from "../../../src/consts";
import { NextPageContext } from "next";
import {
  loadCategories,
  loadItemDetails,
} from "../../../src/requests/requests";

const ProductInner = (props: any) => {
  const store = useBasketStore();
  const { item, cat }: any = props;
  const [curImage, setCurImage]: any = useState(null);
  useEffect(() => {
    if (item) {
      setCurImage(item.image[0]);
    }
  }, []);

  return (
    <Layout
      title={`Примерить и купить ${item.name} в рассрочку в Алматы – Jihaz AR`}
      description={`Jihaz AR – ${item.name} с виртуальной примеркой, покупка в рассрочку, кредит`}
      keywords={`${item.name}, примерить в комнате, купить в рассрочку, кредит, характеристики, описание, отзывы, рейтинг`}
      image={API_STORAGE + item.image[0]}
    >
      <div className="page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12 pb-24">
              <Breadcrumbs
                main={item.category.name}
                isMain={false}
                link={`/category/${item.category_id}`}
                inner={item.name}
                className=""
              />
            </div>

            <div className="product-grid-block">
              <div className="col-grid-1">
                <ShowImage
                  device={props.device}
                  images={item.image}
                  setCurImage={setCurImage}
                  curImage={curImage}
                  objUrl={item.object_3d}
                  gltfUrl={item.object_gltf}
                  backgroundImage={`${curImage}`}
                  className="mb-32"
                />
              </div>

              {item ? (
                <div className="col-grid-2">
                  <div className="product-inner-info">
                    <div className="about-info d-flex-al-center-space-between mb-12">
                      <h1>{item.name}</h1>
                      <div
                        onClick={() => {
                          ReactGA.event({
                            category: "Tap_likes",
                            action: `Tap_likes_${item.id}})}`,
                          });
                          store.addFavorite(item);
                        }}
                        className="favorite"
                      >
                        <svg height="32" width="32">
                          <use
                            href={`/images/icons/heart${
                              store.favorites?.filter(
                                (f: any) => f.id === item.id
                              ).length > 0
                                ? "-fill.svg#root"
                                : ".svg#root"
                            }`}
                          ></use>
                        </svg>
                      </div>
                    </div>
                    {/* <SubTitle16 title="Диван угловой Лофт" className="mb-24" /> */}
                    <div className="rate-review sv-20 mb-24">
                      <Rate rating={5} />
                      <ReviewQty num="2" className="active" />
                    </div>
                    <h2 className="mb-32">{kzt(item.price)}</h2>
                    <Button
                      onClick={() => {
                        ReactGA.event({
                          category: "Tap_add_to_cart",
                          action: `Tap_add_to_cart_${item.id}})}`,
                        });
                        store.addJihaz(item);
                        store.setBasket();
                      }}
                      iconLeft={true}
                      sizeIcon="32"
                      svgIcon="/images/icons/cart-badge-plus.svg#root"
                      title="Добавить в корзину"
                      className="btn btn-primary w-100 btn-54"
                    />
                  </div>
                </div>
              ) : null}

              <div className="col-grid-3">
                <div className="product-inner-desc">
                  <Title20 title="О товаре" className="mb-32" />
                  <div className="desc-block mb-32">
                    {item.itemAttributes
                      ? item.itemAttributes.map((i: any, index: any) => {
                          let isNum = i.attribute.isNumeric;
                          return (
                            <DescriptionInLine
                              key={index}
                              rateActive={false}
                              rateNum={0}
                              link=""
                              title={i.attribute.name}
                              description={
                                !isNum ? i.value.tvalueRu : i.value.nvalue
                              }
                              className="mb-16"
                            />
                          );
                        })
                      : null}
                    {item.shop_info ? (
                      <DescriptionInLine
                        rateActive={true}
                        rateNum={5}
                        id={item.shop_info.id}
                        link={item.shop_info.name}
                        title="Продавец"
                        description=""
                        className="mb-16"
                      />
                    ) : null}
                  </div>

                  {/* <div className="d-flex-al-center-space-between mb-24">
                                    <Title20 title="Отзывы" className=""/>
                                    <Button title="Оставить отзыв" className="btn btn-secondary btn-48" />
                                </div>

                                <div className="rate-review sv-32 mb-32">
                                    <Rate rating={2} />
                                    <Title24 title="4.0" className="mrl-24"/>
                                    <ReviewQty num="23" className="font-24"/>
                                </div>
                                <div className="thumb-image mb-16">
                                    <ThumbImage activeImage="" thumbImage={'url(../images/products/product-3-thumb-1.png'} />
                                    <ThumbImage activeImage="" thumbImage={'url(../images/products/product-3-thumb-1.png'} />
                                    <ThumbImage activeImage="" thumbImage={'url(../images/products/product-3-thumb-1.png'} />
                                    <ThumbImage activeImage="" thumbImage={'url(../images/products/product-3-thumb-1.png'} />
                                    <ThumbImage activeImage="" thumbImage={'url(../images/products/product-3-thumb-1.png'} />
                                    <ThumbImage activeImage="" thumbImage={'url(../images/products/product-3-thumb-1.png'} />
                                </div>

                                <div className="comments-block">
                                    <Comment
                                        className="sv-24" 
                                        name="Еркебулан С." 
                                        description="Очень круто — выбрали диван семьей, примерили в комнате, заказали на сайте. Качество товара, упаковка, сервис продавца — все на шикарнейшем уровне! Всем советую!" 
                                    />
                                    <Comment
                                        className="sv-24" 
                                        name="Елена М." 
                                        description="Хороший диван, нам понравился! 
                                        Прекрасный диван! Заказывала в ткани Formula 494. 
                                        Изначально были сомнения на счет терракотового цвета, боялась, чтобы оттенок не был с рыжим оттенком. Но цвет оказался очень приятным, теплым и удачно вписался в интерьер. Диван очень комфортный для сидения и для сна. " 
                                    />
                                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  console.log(context, "ctx");
  return {
    props: {
      item: await loadItemDetails(context.params.id, (r: any) => r.data),
      cat: await loadCategories((r: any) => r.data),
    },
  };
};

export default observer(ProductInner);
