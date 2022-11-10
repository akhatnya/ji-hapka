import { observer } from "mobx-react-lite";
import { BtnBack, BasketList, Input, Button, RadioButton } from "../components";
import { Title24, Title20, Title16, SubTitle16, SubTitle14 } from "../Typography";
import { useState } from 'react';

const BasketOrder  = ({store}: any) => {

    const [form, setForm]: any = useState({
        name: '',
        phone: '',
        deliveryType: 'Курьер',
        address: ''
    });

    function handleChange(evt: any) {
        const value = evt.target.value;
        setForm({
          ...form,
          [evt.target.name]: value
        });
      }

    function send (e:any) {
        e.preventDefault();
        console.log(form);
    }

    return (
    <div className="basket-order pb-128">
        <div className="container">
            <div className="row">
                <div className={store.basket.length !== 0 ? 'col-md-6' : 'col-md-12'}>
                    <BtnBack className="mb-32" />
                    <Title24 title="Оформление заказа" className="mb-32" />
                    {
                        store.basket.length !== 0 ? (
                            <div className="basket-inner-list mb-24">
                                {
                                    store.basket.map((item: any) => {
                                        return (
                                            <BasketList key={item.id}  store={store} item={item} inBlock={false} inRight={true} className="add-btn mb-24" backgroundImage={`url(${item.itemPhotos[0].photo.url})`} title={item.item.nameRu} price={item.item.price} />
                                        )
                                    })
                                }
                             </div>
                        ) : (
                            <div className="basket-empty">
                                <Title24 title="В вашей корзине пока нет товаров" className="text-center mb-32" />
                                <Button iconRight={true} sizeIcon="24" svgIcon="/images/icons/arrow-right-24.svg#root" title="Перейти к покупкам" className="btn btn-primary btn-54 prl-side-32" />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        {
            store.basket.length !== 0 && (
                <div className="side-order">
                    <div className="side-order-inner">

                        <Title24 title="Оставьте заявку" className="mb-32" />
                        
                        {/* Когда заполняешь */}
                        <form onSubmit={(e:any) => {send(e)}} className="order-status">
                            <div className="mb-32">
                                <Input name="name" value={form.name} onChange={handleChange} title="Имя" placeholder="Ваше имя" labelId="name" className="mb-16" type="text" />
                                <Input name="phone" value={form.phone} onChange={handleChange} type="phone" title="Телефон" placeholder="+7 (7__) ___ __ __" labelId="phone" className=""  />
                            </div>

                            <Title16 title="Способ доставки" className="mb-24" />
                            <div className="d-flex-align-center gg-16 mb-32">
                                <RadioButton value="Курьер" onChange={handleChange} checked={form.deliveryType === 'Курьер'} title="Курьер" labelId="courier" className="" type="radio" name="deliveryType" classActive="" svgIcon="/images/icons/delivery.svg#root"/>
                                <RadioButton value="Самовывоз" onChange={handleChange} checked={form.deliveryType === 'Самовывоз'} title="Самовывоз" labelId="pickup" className="" type="radio" name="deliveryType" classActive="" svgIcon="/images/icons/box.svg#root" />
                            </div>
                            <Input name="address" value={form.address} onChange={handleChange} title="Адрес" placeholder="Город, улица/мкр, дом, этаж, квартира" labelId="address" className="" type="text" />

                            <div className="action">
                                <Button title="Подтвердить заказ" className="btn btn-primary w-100 btn-48 mb-16" />
                                <p className="link-agree">Нажимая кнопку (Подтвердить заказ), Вы принимаете условия <a href="#!">Договора оферты</a>, а также даете Согласие на обработку персональных данных.</p>
                            </div>
                        </form>

                        {/* Когда Заказ успешно сформирован */}
                        {/* <div className="order-status">
                            <Title16 title="Заказ № 3401 успешно сформирован" className="text-center mb-16 pt-128" />
                            <SubTitle16 title="В ближайшее время вам перезвонит менеджер для уточнения деталей" className="text-center mb-32" />
                            <Button title="Продолжить покупки" className="btn btn-primary w-100 btn-48 mb-16" />
                        </div> */}
                        

                    </div>
             </div>
            )
        }
        <div className="footer-order">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex-al-center-space-between">
                            {
                                store.basket.length !== 0 && (
                                    <>
                                        <SubTitle14 title={`Итого ${store.getBasketSize()} товара на сумму`} className=""/>
                                        <Title20 title={`${store.getPrice()} ₸`} className="" />
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default observer(BasketOrder);
