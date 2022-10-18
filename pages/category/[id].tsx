import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Card, Category, Breadcrumbs } from "../../components";
import { loadCategories, loadItemsByCategoryId } from "../../src/requests/requests";
import { Title24 } from "../../Typography";

const CatInner = (props: any) => {
    const router = useRouter();
    const { id } = router.query;

    const [items, setItems]: any = useState([]);
    const [currentCategory, setCurrentCategory]: any = useState(null);
    const [categories, setCategories]: any = useState([]);

    useEffect(() => {
        loadCategories((response: any) => setCategories(response.data));
        if (id) {
            setCurrentCategory(id);
        }
    }, []);

    useEffect(() => {
        if (currentCategory) {
            loadItemsByCategoryId(currentCategory, (response: any) => setItems(response.data));
        }
    }, [currentCategory]);

  return (
    <div className='page-wrapper'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs className="pb-24 mb-24"/>

                    <Title24 title="Примерить в комнате" className="mb-32" />
                    <div className="cat-list mb-64">
                        {
                            categories.map((i: any) => {
                                return <Category 
                                            onClick={() => setCurrentCategory(i.category.id)}
                                            className={`${i.category.id}` == currentCategory ? "active" : ""} 
                                            title={i.category.nameRu} 
                                            srcImage={i.category.smallLogoUrl} 
                                        />
                            })
                        }
                    </div>
                    <div className="grid-max">
                        <Card 
                            title="Журнальный стол Фараон" 
                            backgroundImage={'url(../images/products/product-1.png'}
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
                            backgroundImage={'url(../images/products/product-1.png'}
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
                            backgroundImage={'url(../images/products/product-1.png'}
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
  );
}

export default CatInner;
