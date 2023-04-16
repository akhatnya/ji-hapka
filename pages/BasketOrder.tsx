import { observer } from "mobx-react-lite";
import { BasketList } from "../components";
import {
  BtnBack,
  Input,
  Button,
  RadioButton,
} from "../components/CustomComponents";
import { Title24, Title16, SubTitle14 } from "../components/Typography";
import { useState } from "react";
import { sendOrder } from "../src/requests/requests";
import { useRouter } from "next/router";
import { kzt } from "../utils/globalUtils";
import { isMobile } from "react-device-detect";
import Link from "next/link";
import { useBasketStore } from "../providers/RootStoreProvider";

const BasketOrder = () => {
  const store = useBasketStore();
  const router = useRouter();

  const [form, setForm]: any = useState({
    name: "",
    phone: null,
    deliveryMethod: 1,
    address: "",
  });

  const [status, setStatus]: any = useState(false);

  function handleChange(evt: any) {
    const { name, value } = evt.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  async function send(e: any) {
    e.preventDefault();
    const { deliveryMethod, phone } = form;
    const data = {
      ...form,
      deliveryMethod: Number(deliveryMethod),
      basket: store.basket,
      phone: Number(
        phone.replace("(", "").replace(")", "").replaceAll("-", "")
      ),
    };
    await sendOrder(data, (res: any) => {
      store.clearBasket();
      setStatus(true);
    });
  }

  function goShop() {
    router.push("/");
  }

  return (
    <div className="basket-order pb-128">
      <div className="container">
        <div className="row">
          <div className={store.basket.length !== 0 ? "col-md-6" : "col-md-12"}>
            <BtnBack className="mb-32" />
            <Title24 title="Оформление заказа" className="mb-32" />
            {store.basket.length !== 0 ? (
              <div className="basket-inner-list mb-24">
                {store.basket.map((item: any) => {
                  return (
                    <BasketList
                      key={item.id}
                      store={store}
                      item={item}
                      inBlock={false}
                      inRight={true}
                      className="add-btn mb-24"
                      backgroundImage={`url(${item.image[0]})`}
                      title={item.name}
                      price={item.price}
                    />
                  );
                })}
              </div>
            ) : (
              !status && (
                <div className="basket-empty">
                  <Title24
                    title="В вашей корзине пока нет товаров"
                    className="text-center mb-32"
                  />
                  <Button
                    onClick={goShop}
                    iconRight={true}
                    sizeIcon="24"
                    svgIcon="/images/icons/arrow-right-24.svg#root"
                    title="Перейти к покупкам"
                    className="btn btn-primary btn-54 prl-side-32"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {status ? (
        <div className="side-order">
          <div className="side-order-inner">
            <Title24 title="Оставьте заявку" className="mb-32" />
            <Title16 title="Заказ успешно сформирован" className="mb-24" />
            <div className="d-flex-align-center gg-16 mb-32">
              <p style={{ color: "#051E47", fontSize: "16px" }}>
                В ближайшее время вам перезвонит менеджердля уточнения деталей
              </p>
            </div>
            <div className="action">
              <Link href={"/"}>
                <Button
                  title="Продолжить покупки"
                  className="btn btn-primary w-100 btn-48 mb-16"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        store.basket.length !== 0 &&
        !isMobile && (
          <div className="side-order">
            <div className="side-order-inner">
              <Title24 title="Оставьте заявку" className="mb-32" />

              {/* Когда заполняешь */}
              <form
                onSubmit={(e: any) => {
                  send(e);
                }}
                className="order-status"
              >
                <div className="mb-32">
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    title="Имя"
                    placeholder="Ваше имя"
                    labelId="name"
                    className="mb-16"
                    type="text"
                  />
                  <Input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="phone"
                    title="Телефон"
                    placeholder="+7 (7__) ___ __ __"
                    labelId="phone"
                    className=""
                  />
                </div>

                <Title16 title="Способ доставки" className="mb-24" />
                <div className="d-flex-align-center gg-16 mb-32">
                  <RadioButton
                    value={1}
                    onChange={handleChange}
                    title="Доставка"
                    labelId="courier"
                    className=""
                    type="radio"
                    name="deliveryMethod"
                    classActive=""
                    svgIcon="/images/icons/delivery.svg#root"
                  />
                  <RadioButton
                    value={2}
                    onChange={handleChange}
                    title="Самовывоз"
                    labelId="pickup"
                    className=""
                    type="radio"
                    name="deliveryMethod"
                    classActive=""
                    svgIcon="/images/icons/box.svg#root"
                  />
                </div>

                {form.deliveryMethod == 1 && (
                  <Input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    title="Адрес"
                    placeholder="Город, улица/мкр, дом, этаж, квартира"
                    labelId="address"
                    className=""
                    type="text"
                  />
                )}
                <div className="action">
                  <Button
                    title="Подтвердить заказ"
                    className="btn btn-primary w-100 btn-48 mb-16"
                  />
                  <p className="link-agree">
                    Нажимая кнопку (Подтвердить заказ), Вы принимаете условия{" "}
                    <a href="#!">Договора оферты</a>, а также даете Согласие на
                    обработку персональных данных.
                  </p>
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
      )}
      <div className="footer-order mb-64">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex-al-center-space-between">
                {store.basket.length !== 0 && (
                  <>
                    <div className="item-and-sale">
                      <SubTitle14
                        title={`Итого ${store.getBasketSize()} товара на сумму`}
                        className=""
                      />
                      <span className="sale-percent">5% скидка</span>
                    </div>
                    <div className="price">
                      <span className="primary-price">
                        {kzt(store.getPrice() * 0.95)}
                      </span>
                      <span className="sale-price">
                        {kzt(store.getPrice())}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <Button
            onClick={() => {
              store.setSubmit();
            }}
            title="Оформить заказ"
            className="btn btn-primary w-100 btn-48 mb-16 btn-order-apply"
          />
        </div>
      </div>
    </div>
  );
};

export default observer(BasketOrder);
