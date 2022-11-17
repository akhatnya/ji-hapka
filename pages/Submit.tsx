import { observer } from 'mobx-react-lite';
import { send } from 'process';
import React from 'react';
import { Button, Input, RadioButton, SideBar } from '../components';
import BckDrp from '../components/BckDrp';
import { useBasketStore } from '../providers/RootStoreProvider';
import { Title24, Title20, Title16, SubTitle16 } from '../Typography';
import { useState } from 'react';
import { sendOrder } from "../src/requests/requests";
import { useRouter } from "next/router";
import { kzt } from "../utils/globalUtils";
import  { isMobile } from 'react-device-detect';

const Submit = () => {
    const store = useBasketStore();
    const router = useRouter();

    const [form, setForm]: any = useState({
        name: '',
        phone: '',
        deliveryMethod: 1,
        address: ''
    });

    const [status, setStatus]: any = useState(false);

    function handleChange(evt: any) {
        const value = evt.target.value;
        setForm({
          ...form,
          [evt.target.name]: value
        });
      }

    async function send (e:any) {
        e.preventDefault();
        const {deliveryMethod} = form;
        const data = {...form,
             deliveryMethod: Number(deliveryMethod),
             basket: store.basket
            };
        await sendOrder(data, (res: any) => {
            store.clearBasket();
            setStatus(true);
        });
    }

    function goShop () {
        router.push('/');
    }
    return (     
        store.isSubmit ? (
           <>
            <div className="mobile-scroll">
              <div className="mobile-scroll-inner">
                <div className="scroll-close"></div>
                <div className="basket">
                <div className="sidebar active sidebar-order">

                    <div className="sidebar-inner">

                            <div className="sidebar-header mb-24">
                                <Title20 title="Оставьте заявку" className=""/>
                                <button onClick={() => store.setSubmit()} className="btn-close">
                                    <svg height="24" width="24">
                                        <use href={`/images/icons/Close_S.svg#root`}></use>
                                    </svg>
                                </button>
                            </div>
                            <div className="sidebar-body">
                                <div className="side-order-inner">
                                    
                                            
                                    {/* Когда заполняешь */}
                                    {
                                        status ? (
                                            <div className="order-status">
                                                <Title16 title="Заказ успешно сформирован" className="text-center mb-16" />
                                                <SubTitle16 title="В ближайшее время вам перезвонит менеджер для уточнения деталей" className="text-center mb-32" />
                                                <Button title="Продолжить покупки" className="btn btn-primary w-100 btn-48 mb-16" />
                                            </div>
                                        ) : (
                                            <form onSubmit={(e:any) => {send(e)}} className="order-status">
                                                <div className="mb-32">
                                                    <Input name="name" value={form.name} onChange={handleChange} title="Имя" placeholder="Ваше имя" labelId="name" className="mb-16" type="text" />
                                                    <Input name="phone" value={form.phone} onChange={handleChange} type="phone" title="Телефон" placeholder="+7 (7__) ___ __ __" labelId="phone" className=""  />
                                                </div>
                    
                                                <Title16 title="Способ доставки" className="mb-24" />
                                                <div className="d-flex-align-center gg-16 mb-32">
                                                    <RadioButton value={1} onChange={handleChange} checked={form.deliveryMethod == 1} title="Курьер" labelId="courier" className="" type="radio" name="deliveryMethod" classActive="" svgIcon="/images/icons/delivery.svg#root"/>
                                                    <RadioButton value={2} onChange={handleChange} checked={form.deliveryMethod == 2} title="Самовывоз" labelId="pickup" className="" type="radio" name="deliveryMethod" classActive="" svgIcon="/images/icons/box.svg#root" />
                                                </div>
                                                <Input name="address" value={form.address} onChange={handleChange} title="Адрес" placeholder="Город, улица/мкр, дом, этаж, квартира" labelId="address" className="" type="text" />
                    
                                                <div className="action mt-24">
                                                    <Button title="Оформить заказ" className="btn btn-primary w-100 btn-48 mb-16" />
                                                    <p className="link-agree">Нажимая кнопку (Подтвердить заказ), Вы принимаете условия <a href="#!">Договора оферты</a>, а также даете Согласие на обработку персональных данных.</p>
                                                </div>
                                            </form>
                                        )
                                    }
            
                                    {/* Когда Заказ успешно сформирован */}
                                    
                                </div>
                            </div>
                            

                        </div>

                    </div>

                </div>
              </div>
            </div>
            <BckDrp />
           </>
        ) : null
    )
}

export default observer(Submit)