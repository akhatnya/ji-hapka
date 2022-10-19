import { BtnBack, BasketList, Input, Button, RadioButton } from "../components";
import { Title24, Title20, Title16, SubTitle16, SubTitle14 } from "../Typography";

const Basket  = () => {
    
  return (
    <div className="basket-order pb-128">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <BtnBack className="mb-32" />
                    <Title24 title="Оформление заказа" className="mb-32" />
                    <div className="basket-inner-list mb-24">
                        <BasketList inBlock={false} inRight={true} className="add-btn mb-24" backgroundImage={'url(../images/products/product-2.png'} title="Трио стол журнальный" price="99 000" />
                        <BasketList inBlock={false} inRight={true} className="add-btn mb-24" backgroundImage={'url(../images/products/product-1.png'} title="Журнальный стол Фараон" price="220 000" />
                        <BasketList inBlock={false} inRight={true} className="add-btn mb-24" backgroundImage={'url(../images/products/product-2.png'} title="Трио стол журнальный" price="99 000" />
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-order">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex-al-center-space-between">
                            <SubTitle14 title="Итого 2 товара на сумму" className=""/>
                            <Title20 title="198 000 ₸" className="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="side-order">
            <div className="side-order-inner">

                <Title24 title="Оставьте заявку" className="mb-32" />
                
                {/* Когда заполняешь */}
                <div className="order-status">
                    <div className="mb-32">
                        <Input title="Имя" placeholder="Ваше имя" labelId="name" className="mb-16" type="text" />
                        <Input title="Телефон" placeholder="+7 (7__) ___ __ __" labelId="phone" className="" type="text" />
                    </div>

                    <Title16 title="Способ доставки" className="mb-24" />
                    <div className="d-flex-align-center gg-16 mb-32">
                        <RadioButton title="Курьер" labelId="courier" className="" type="radio" name="delivery" classActive="" svgIcon="/images/icons/delivery.svg#root"/>
                        <RadioButton title="Самовывоз" labelId="pickup" className="" type="radio" name="delivery" classActive="" svgIcon="/images/icons/box.svg#root" />
                    </div>
                    <Input title="Адрес" placeholder="Город, улица/мкр, дом, этаж, квартира" labelId="address" className="" type="text" />

                    <div className="action">
                        <Button title="Подтвердить заказ" className="btn btn-primary w-100 btn-48 mb-16" />
                        <p className="link-agree">Нажимая кнопку (Подтвердить заказ), Вы принимаете условия <a href="#!">Договора оферты</a>, а также даете Согласие на обработку персональных данных.</p>
                    </div>
                </div>

                {/* Когда Заказ успешно сформирован */}
                {/* <div className="order-status">
                    <Title16 title="Заказ № 3401 успешно сформирован" className="text-center mb-16 pt-128" />
                    <SubTitle16 title="В ближайшее время вам перезвонит менеджер для уточнения деталей" className="text-center mb-32" />
                    <Button title="Продолжить покупки" className="btn btn-primary w-100 btn-48 mb-16" />
                </div> */}
                

            </div>
        </div>
    </div>
  );
}

export default Basket;
