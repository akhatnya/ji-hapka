import { BtnBack, Card, Button } from ".";
import { Title24 } from "../Typography";

const BasketEmpty  = () => {

  return (
    <div className="basket-order pb-128">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <BtnBack className="mb-32" />
                    <Title24 title="Оформление заказа" className="mb-32" />
                    
                    <div className="basket-empty">
                        <Title24 title="В вашей корзине пока нет товаров" className="text-center mb-32" />
                        <Button iconRight={true} sizeIcon="24" svgIcon="/images/icons/arrow-right-24.svg#root" title="Перейти к покупкам" className="btn btn-primary btn-54 prl-side-32" />
                    </div>
                    <div className="but-any ptb-128">
                        <Title24 title="Купить мебель" className="mb-32" />

                        <div className="grid-max">
                            <Card 
                                title="Журнальный стол Фараон" 
                                backgroundImage={'url(../images/products/product-2.png'}
                                price={'4 790'}
                                priceSale={'6 490'}
                            />
                            <Card 
                                title="Журнальный стол Фараон" 
                                backgroundImage={'url(../images/products/product-2.png'}
                                price={'4 790'}
                                priceSale={'6 490'}
                            />
                            <Card 
                                title="Журнальный стол Фараон" 
                                backgroundImage={'url(../images/products/product-2.png'}
                                price={'4 790'}
                                priceSale={'6 490'}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default BasketEmpty;
