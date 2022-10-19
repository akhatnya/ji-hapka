import { Title24 } from "../Typography";

const SearchRoom = (props: any) => {

    return (
        <section className="search-room pb-64">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-32">
                        <Title24 title="Ищите мебель по комнатам" className="" />
                    </div>
                    <div className="search-room-block">
                        {
                            props.menu?.rooms?.map((item: any, index: any) => {
                                return <div className="popular-cats-img h-400" key={index}>
                                            <img src={item.logoUrl} />
                                            <div className="popular-cats-info">
                                                <h2 className="title-32 mb-8">{item.nameRu}</h2>
                                            </div>
                                        </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
  };
  
  export default SearchRoom;
  