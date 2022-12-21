import { url } from "../../src/urls";
import { BtnBack, Tabs, Category, Button, Rate, GivePremium, Comment, Card } from "../../components";
import { Title24, Title20, Title16, SubTitle16,  SubTitle14 } from "../../Typography";
import { useBasketStore } from "../../providers/RootStoreProvider";
import { useEffect } from "react";

const Seller  = (props: any) => {
    const store = useBasketStore();
    const shop: any = props.shopInfo;

  return (
    <div className='page-wrapper'>
        <div className="container">

            <div className="row">
                <div className="col-md-12 pb-64">
                    {/* <BtnBack className="mb-32" /> */}

                    <div className="seller-card">
                        <div className="seller-card-left">
                            <div className="img-seller-card" ></div>
                            <div className="text">
                                <div className="premium-active">
                                    <Title20 title={shop.name} className="" />
                                    <GivePremium className="" />
                                </div>
                                <SubTitle16 title={shop.descRu} className="" />
                            </div>
                        </div>
                        {/* <div className="seller-card-right">
                            <div className="seller-rate sv-24">
                                <Rate rating={5} />
                                <Title24 title="5.0" className="" />
                            </div>
                            <p className="desc-seller">Рейтинг формируется по оценкам покупателей</p>
                        </div> */}
                    </div>

                    <div className="tabs-seller">

                        <div className="tab-seller d-flex-al-center-space-between">
                            <div className="tabs">
                                {/* <Tabs title="Отзывы" num={3} className="active" /> */}
                                <Tabs title="Товары" className="" />
                                {/* <Tabs title="Контакты" className="" /> */}
                            </div>
                            {/* <Button title="Оставить отзыв" className="btn btn-secondary btn-48" /> */}
                        </div>

                        <div className="content-seller">

                            {/* <div className="seller-comments-block col-md-8 p-0">
                                <Comment
                                    imgComment={true}
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

                            <div className="seller-products-block">
                                {/* <div className="cat-list mb-64">
                                    <Category num="4" title="Диваны" srcImage="../images/cats/cat-1.svg" />
                                    <Category num="22" className="active" title="Кровати" srcImage="../images/cats/cat-2.svg" />
                                    <Category num="3" title="Шкафы" srcImage="../images/cats/cat-3.svg" />
                                    <Category num="54" title="Комоды" srcImage="../images/cats/cat-4.svg" />
                                    <Category num="33" title="Столы" srcImage="../images/cats/cat-5.svg" />
                                    <Category num="18" title="Банкетки" srcImage="../images/cats/cat-6.svg" />
                                </div> */}
                                <div className="grid-max">
                                    {
                                        shop.items.map((i: any, index: any) => {
                                            return (
                                                <span key={index}>
                                                    <Card 
                                                        device={props.device}
                                                        store={store}
                                                        item={i}
                                                        href={`/catalog/product/${i.item.id}`}
                                                        index={index}
                                                        object3d={i.item.object3d}
                                                        gltf={i.item.objectGltf}
                                                        title={i.item.nameRu} 
                                                        backgroundImage={`url(${i.itemPhotos[0]?.photo.url}`}
                                                        priceSale={i.item.price}
                                                        key={index}
                                                        price={i.item.price * 0.95}
                                                    />
                                                </span>
                                            )
                                        })
                                    }
                                    
                                </div>
                            </div>

                            {/* <div className="seller-contact-block col-md-8 p-0">

                                <div className="text mb-32">
                                    <SubTitle14 title="Телефон" className="third-color mb-12" />
                                    <a href="#" className="subtitle-14 primary-color" type="">+7 (777) 380-00-12</a>
                                </div>
                                
                                <Title16 title="Пункты самовывоза" className=""/>

                                <div className="seller-address-list">
                                    <div className="seller-address">
                                        <div className="text left">
                                            <SubTitle14 title="Адрес" className="third-color mb-12" />
                                        </div>
                                        <div className="text right">
                                            <SubTitle14 title="График работы" className="third-color mb-12" />
                                        </div>
                                    </div>

                                    <div className="seller-address">
                                        <div className="text left">
                                            <SubTitle14 title="г. Алматы, улица Жандосова, 177А" className="" />
                                        </div>
                                        <div className="text right">
                                            <SubTitle14 title="Пн-Пт с 12:00 до 18:00" className="" />
                                            <SubTitle14 title="Сб-Вс - выходной" className="" />
                                        </div>
                                    </div>

                                    <div className="seller-address">
                                        <div className="text left">
                                            <SubTitle14 title="г. Алматы, улица Жандосова, 177А" className="" />
                                        </div>
                                        <div className="text right">
                                            <SubTitle14 title="Пн-Пт с 12:00 до 18:00" className="" />
                                            <SubTitle14 title="Сб-Вс - выходной" className="" />
                                        </div>
                                    </div>

                                </div>

                            </div> */}

                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
  );
}

export const getServerSideProps = async (ctx: any) => {
    let data =  await (await fetch(url(`/api/v1/shop/info/${ctx.query.id}`))).json();
    console.log(data);
    return {
        props: {
            shopInfo: data
        }
    }
};

export default Seller;
