import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga";
import translitRuEn from "../utils/trans";
import { Banner, Card, Category } from "../components";
import { PopularCats, SearchRoom, ForSellers } from "../containers";
import { useBasketStore } from "../providers/RootStoreProvider";
import {
  loadBestsellers,
  loadCategories,
  loadMenu,
  loadItemDetails,
} from "../src/requests/requests";
import { SubTitle16, Title24 } from "../components/Typography";
import { API_STORAGE } from "../src/consts";
import { Layout } from "../containers";

const Main = (props: any) => {
  const { bestsellersReq, categoriesReq, menuReq } = props;
  const store = useBasketStore();
  const router = useRouter();
  const [categories, setCategories]: any = useState(categoriesReq);
  const [bestsellers, setBestsellers]: any = useState(bestsellersReq);
  const [menu, setMenu]: any = useState(menuReq);

  const onClickCategory = (i: any) => {
    ReactGA.event({
      category: "Tap_category",
      action: `Tap_category_${translitRuEn(i.name)}`,
    });
    router.push(`/category/${i.id}`);
  };

  return (
    <Layout
      title="Jihaz AR – маркетплейс мебели для дома и офиса с виртуальной примеркой AR Augmented Reality"
      description="Jihaz AR – примерка мебели в комнате с дополненной реальностью AR и покупка в кредит, рассрочку у продавцов высококачественной мебели в Алматы, Астане"
      keywords="Мебель, примерка, дополненная реальность, 3D примерка, ковры, товары для дома"
    >
      <main className="main">
        <section className="main-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Banner />
                <div className="cat-list ptb-64">
                  {categories.map((i: any, index: any) => {
                    return (
                      <span onClick={() => onClickCategory(i)} key={index}>
                        <Category
                          //num={isCount}
                          key={index}
                          title={i.name}
                          srcImage={API_STORAGE + i.small_logo_url}
                        />
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sale-hit pb-64">
          <div className="container">
            <div className="row">
              <div
                onClick={() => store.saveBasketInCookie()}
                className="col-md-12"
              >
                <Title24 title="Хиты продаж" className="mb-32" />
                <div className="grid-max">
                  {bestsellers.map((b: any, index: any) => {
                    return (
                      <div className="card-span" key={index}>
                        <Card
                          device={props.device}
                          store={store}
                          item={b}
                          title={b.name}
                          key={index}
                          object3d={b.object_3d}
                          gltf={b.object_gltf}
                          backgroundImage={`url('${API_STORAGE}${b.image[0]}')`}
                          price={b.price * 0.95}
                          priceSale={b.price}
                          href={`/catalog/product/${b.id}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <PopularCats menu={menu} />

        <section className="advantages mb-64">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="pr-32">
                  <h2 className="h2-title mb-16">
                    Выбирайте мебель <br />
                    за <span className="line-through third-color">
                      недели
                    </span>{" "}
                    минуты
                  </h2>
                  <SubTitle16
                    title="Помогаем сэкономить ваше время
                                                на поездках в выставочные залы
                                                и поиск мебели в Интернете"
                    className=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="advant-info mb-32">
                  <svg height="32" width="33">
                    <use href={`/images/icons/WavyCheck.svg#root`}></use>
                  </svg>
                  <div className="advant-text">
                    <h4>Проверенные продавцы</h4>
                    <p>
                      Ищите мебель для дома или офиса у проверенных продавцов
                    </p>
                  </div>
                </div>

                <div className="advant-info">
                  <svg height="32" width="33">
                    <use href={`/images/icons/AR.svg#root`}></use>
                  </svg>
                  <div className="advant-text">
                    <h4>Примерка дома</h4>
                    <p>Примерьте мебель в комнате не выходя из дома</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="advant-info mb-32">
                  <svg height="32" width="33">
                    <use href={`/images/icons/WavyCheck.svg#root`}></use>
                  </svg>
                  <div className="advant-text">
                    <h4>Доставка</h4>
                    <p>
                      Оформите мебель с доставкой на дом, офис или заберите
                      заказ самовывозом.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SearchRoom menu={menu} />

        {/* <ForSellers /> */}

        <section className="jihhaz-app mb-64">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Title24 title="Jihaz.app" className="" />
                <SubTitle16
                  title="Jihaz —  интернет-площадка для поиска современной мебели и примерки её в комнате. 
    Jihaz запустился в 2022 году. Сегодня у нас на площадке размещена продукция 10 крупных продавцов мебели. Прямая коммуникация и продажи между производителем и покупателем позволяют оперативно реагировать на изменения спроса, улучшать клиентский сервис, собирать обратную связь и, как следствие, повышать качество предлагаемых продуктов и услуг. Результат такого подхода к потребителю и глубокого понимания рынка — десятки тысяч довольных клиентов."
                  className=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  return {
    props: {
      bestsellersReq: await loadBestsellers((r: any) => r.data),
      categoriesReq: await loadCategories((r: any) => r.data),
      menuReq: await loadMenu((r: any) => r.data),
    },
  };
};

export default observer(Main);
