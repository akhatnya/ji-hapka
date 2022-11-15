
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Banner, Card, Category } from "../components";
import { PopularCats, SearchRoom, ForSellers } from "../containers";
import { useBasketStore } from "../providers/RootStoreProvider";
import { loadBestsellers, loadCategories, loadMenu } from "../src/requests/requests";
import { SubTitle16, Title24 } from "../Typography";


const Main = () => {
    const store = useBasketStore();
    const [categories, setCategories]: any = useState([]);
    const [bestsellers, setBestsellers]: any = useState([]);
    const [menu, setMenu]: any = useState({
        categories: [],
        rooms: []
    });

    useEffect(() => {
        loadCategories((response: any) => setCategories(response.data));
        loadBestsellers((response: any) => setBestsellers(response.data));
        loadMenu((response: any) => setMenu(response.data));
    }, [])

  return (
    <main className='main'>

        <section className="main-banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Banner/>
                        <div className="cat-list ptb-64">
                            {
                             categories.map((i: any, index: any) => {
                                    return (
                                        <Link href={`/category/${i.category.id}`} key={index}>
                                                 <Category 
                                                 num={i.itemsCount} 
                                                 key={index} 
                                                 title={i.category.nameRu} 
                                                 srcImage={i.category.smallLogoUrl} />
                                            </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="sale-hit pb-64">
            <div className="container">
                <div className="row">
                    <div onClick={() => store.saveBasketInCookie()} className="col-md-12">
                        <Title24 title="Хиты продаж" className="mb-32" />
                        <div className="grid-max">
                            {
                                bestsellers.map((b: any, index: any) => {
                                    return <span>
                                                <Card 
                                                    store={store}
                                                    item={b}
                                                    title={b.item.nameRu}
                                                    key={index}
                                                    object3d={b.item.object3d}
                                                    backgroundImage={`url(${b?.itemPhotos[0]?.photo.url})`}
                                                    price={b.item.price}
                                                    priceSale={b.item.price * 1.05}
                                                    href={`/catalog/product/${b.item.id}`}
                                                /></span>
                                })
                            }
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
                                Выбирайте мебель <br/>за <span className="line-through third-color">недели</span> минуты
                            </h2>
                            <SubTitle16 title="Помогаем сэкономить ваше время
                                            на поездках в выставочные залы
                                            и поиск мебели в Интернете" className="" />
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className="advant-info mb-32">
                            <svg height="32" width="33">
                                <use href={`/images/icons/WavyCheck.svg#root`}></use>
                            </svg>
                            <div className="advant-text">
                                <h4>Проверенные продавцы</h4>
                                <p>Ищите мебель для дома или офиса у проверенных продавцов</p>
                            </div>
                        </div>

                        <div className="advant-info">
                            <svg height="32" width="33">
                                <use href={`/images/icons/AR.svg#root`}></use>
                            </svg>
                            <div className="advant-text">
                                <h4>Проверенные продавцы</h4>
                                <p>Ищите мебель для дома или офиса у проверенных продавцов</p>
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
                                <p>Оформите мебель с доставкой на дом, офис или заберите заказ самовывозом.</p>
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
                        <Title24 title="Jihaz.app" className=""/>
                        <SubTitle16 title="Jihaz —  интернет-площадка для поиска современной мебели и примерки её в комнате. 
Jihaz запустился в 2022 году. Сегодня у нас на площадке размещена продукция 10 крупных продавцов мебели. Прямая коммуникация и продажи между производителем и покупателем позволяют оперативно реагировать на изменения спроса, улучшать клиентский сервис, собирать обратную связь и, как следствие, повышать качество предлагаемых продуктов и услуг. Результат такого подхода к потребителю и глубокого понимания рынка — десятки тысяч довольных клиентов." className=""/>
                    </div>
                </div>
            </div>
        </section>

    </main>
  );
}

export default observer(Main);

