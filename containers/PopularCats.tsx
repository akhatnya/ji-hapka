import Link from "next/link";
import { Title24, Title20 ,SubTitle16 } from "../Typography";

const PopularCats = (props: any) => {

    const blockClassnames = [
        {a: 'h-400', b: 'mb-8'},
        {a: 'h-194 bl-20', b: 'mb-8'},
        {a: 'h-194 tl-20', b: 'mb-8'},
        {a: 'h-400 tl-32', b: ''},
        {a: 'h-400 tl-32', b: ''},
        {a: 'h-400 tl-32', b: ''},
    ];

    return (
        <section className="popular-cats pb-64">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-32">
                        <Title24 title="Популярные категории" className="" />
                    </div>

                    <div className="popular-cats-list-block">
                        {
                            props.menu?.categories?.map((i: any, index: any) => {
                                return <Link href={`/category/${i.id}`}>
                                            <div key={index} className={`popular-cats-img ${blockClassnames[index].a}`}>
                                                <img src={i.logoUrl} />
                                                <div className="popular-cats-info">
                                                    <Title20 title={i.nameRu} className={blockClassnames[index].b} />
                                                    <SubTitle16 title="30 моделей" className="" />
                                                </div>
                                            </div>
                                        </Link>
                            })
                        }

                    </div>

                </div>
            </div>
        </section>
    );
  };
  
  export default PopularCats;
  