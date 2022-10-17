import { Title24 } from "../Typography";

const SearchRoom = () => {

    return (
        <section className="search-room pb-64">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-32">
                        <Title24 title="Ищите мебель по комнатам" className="" />
                    </div>

                    <div className="search-room-block">

                        <div className="popular-cats-img h-400">
                            <img src="images/banners/search-room-1.png" />
                            <div className="popular-cats-info">
                                <h2 className="title-32 mb-8">Кухня</h2>
                            </div>
                        </div>
                        <div className="popular-cats-img h-400">
                            <img src="images/banners/search-room-2.png" />
                            <div className="popular-cats-info">
                                <h2 className="title-32 mb-8">Спальня</h2>
                            </div>
                        </div>
                        <div className="popular-cats-img h-400">
                            <img src="images/banners/search-room-3.png" />
                            <div className="popular-cats-info">
                                <h2 className="title-32 mb-8">Домашний офис</h2>
                            </div>
                        </div>
                        <div className="popular-cats-img h-400">
                            <img src="images/banners/search-room-4.png" />
                            <div className="popular-cats-info">
                                <h2 className="title-32 mb-8">Гостиная</h2>
                            </div>
                        </div>
                        
                    </div>
                    

                </div>
            </div>
        </section>
    );
  };
  
  export default SearchRoom;
  