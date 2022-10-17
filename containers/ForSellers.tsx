import { Button } from "../components";
import { Title24, Title20, SubTitle16 } from "../Typography";

const ForSellers = () => {

    return (
        <section className="seller-section ptb-64">
            <div className="container">
                <div className="seller-block">
                    <div className="title-popular">
                        
                        <Title24 title="#продавцам" className="font-400 mb-24" />
                        <Title24 title="Зарабатывайте вместе с нами" className="mb-32" />
                        
                    </div>
                    <div className="seller-text-btn">
                        <div className="sellers-list">

                            <div className="sellers-item">
                                <div className="sellers-icon">
                                    <svg viewBox="0 0 24 24">
                                        <use href={`/images/icons/trending_up-24.svg#root`}></use>
                                    </svg>
                                </div>
                                <div className="sellers-text">
                                    <SubTitle16 title="Поток целевых покупателей" className="font-700" />
                                    <SubTitle16 title="Мы приведем к вам горячих клиентов, ваша задача — закрыть продажу" className="" />
                                </div>
                            </div>

                            <div className="sellers-item">
                                <div className="sellers-icon">
                                    <svg viewBox="0 0 24 24">
                                        <use href={`/images/icons/target-24.svg#root`}></use>
                                    </svg>
                                </div>
                                <div className="sellers-text">
                                    <SubTitle16 title="Ускорение принятия решения" className="font-700" />
                                    <SubTitle16 title="Клиенты на 40% чаще покупают товары после примерки их в комнате" className="" />
                                </div>
                            </div>

                            <div className="sellers-item">
                                <div className="sellers-icon">
                                    <svg viewBox="0 0 24 24">
                                        <use href={`/images/icons/umbrella-24.svg#root`}></use>
                                    </svg>
                                </div>
                                <div className="sellers-text">
                                    <SubTitle16 title="Промоутинг" className="font-700" />
                                    <SubTitle16 title="Качественные фото, 3D визуализация, рекламная поддержка и много чего ещё" className="" />
                                </div>
                            </div>
                                
                        </div>

                        <div className="d-flex-align-center">
                            <Button iconRight={true} sizeIcon="24" svgIcon="/images/icons/arrow-right-24.svg#root" title="Подать заявку" className="btn btn-primary btn-48 mr-16" />
                            <Button iconRight={true} sizeIcon="24" svgIcon="/images/icons/arrow-right-24.svg#root" title="Подробные условия" className="btn btn-secondary btn-48" />
                        </div>
                    </div>
                        
                    <div className="sellers-banner">
                        <div className="sellers-img" style={{ backgroundImage: "url(../images/banners/sellers-1.png)"}}></div>
                    </div>

                </div>
            </div>
        </section>
    );
  };
  
  export default ForSellers;
  