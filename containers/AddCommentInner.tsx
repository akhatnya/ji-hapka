import { observer } from "mobx-react-lite";
import { Button, TextArea, Rate, Input, Quantity } from "../components";
import { Title20, Title16, SubTitle16 } from "../Typography";

const AddCommentInner  = ({store}: any) => {
{ /* Need to restyle this block */}
  
  return (
    <div className="sidebar-body">
        
        {
            store.basket.map((jihaz: any, index: any) => {
                return (
                    <div className="comment-product">
                        <div className="img-comment-product" style={{ backgroundImage: `url(${jihaz.itemPhotos[0].photo.url})` }}></div>
                            <div className="text-comment-product">
                                <div key={index}>
                                    <SubTitle16 title={jihaz.item.nameRu} className=""/>
                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Title16 title={`${jihaz.item.price} тг`} className=""/>
                                    <Quantity title={jihaz.quantity} className="" store={store} jihaz={jihaz} />
                                    </div>
                                </div>
                            </div>
                    </div>
                )
            })
        }

        {/* <div className="rate-product mb-32 sv-24">
            <Title16 title="Оцените товар" className="mb-12"/>
            <Rate rating={3} />
        </div>
        <div className="add-comment-product">
            <Title16 title="Комментарий" className="mb-12"/>
            <TextArea qtyRow={3} placeholder="Оставьте комментарий об этом товаре" className="mb-32"/>
            <Input
                type="text"
                placeholder=""
                labelId="name"
                className="mb-16"
                title="Имя"
            />
            <Input
                type="text"
                placeholder="+7 (7__) ___ __ __"
                labelId="name"
                className=""
                title="Телефон"
            />
        </div> */}

        <Button title="Оформить заказ" className="btn btn-primary w-100 btn-48" />
        <Button onClick={() => {store.setBasket(false)}} title="Продолжить покупки" className="btn w-100 btn-48" />

        {/* <div className="comment-added-send">
            <img src="images/icons/hand-up-big.svg" />
            <div className="text">
                <Title20 title="Спасибо!" className="mb-12"/>
                <SubTitle16 title="Мы ценим Ваше мнение, этот отзыв поможет нам работать лучше." className=""/>
            </div>
            <Button title="Вернуться на Главную" className="btn btn-primary w-100 btn-48" />
        </div> */}
        
    </div>
  );
}

export default observer(AddCommentInner);