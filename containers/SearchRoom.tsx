import Link from "next/link";
import { Title24 } from "../Typography";
import { useRouter } from "next/router";
import ReactGA from "react-ga";
import translitRuEn from '../utils/trans';

const SearchRoom = (props: any) => {
    const router = useRouter();

    const onClickRoom = (i: any) => {
        console.log(i.nameRu)
        ReactGA.event({
          category: "Tap_furniture_byroom",
          action: `Tap_furniture_byroom_${translitRuEn(i.nameRu)}`,
        });
        router.push(`/room/${i.id}`)
    }

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
                                return <div onClick={() => onClickRoom(item)} className="popular-cats-img h-400" key={index}>
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
  