import Link from "next/link";
import { Title24, Title20, SubTitle16 } from "../components/Typography";
import { useRouter } from "next/router";
import ReactGA from "react-ga";
import translitRuEn from "../utils/trans";
import { API_STORAGE } from "../src/consts";

const PopularCats = (props: any) => {
  const router = useRouter();

  const blockClassnames = [
    { a: "h-400", b: "mb-8" },
    { a: "h-194 bl-20", b: "mb-8" },
    { a: "h-194 tl-20", b: "mb-8" },
    { a: "h-400 tl-32", b: "" },
    { a: "h-400 tl-32", b: "" },
    { a: "h-400 tl-32", b: "" },
  ];

  const onClickCategory = (i: any) => {
    ReactGA.event({
      category: "Tap_popular_categories",
      action: `Tap_popular_categories_${translitRuEn(i.name)}`,
    });
    router.push(`/category/${i.id}`);
  };

  return (
    <section className="popular-cats pb-64">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-32">
            <Title24 title="Популярные категории" className="" />
          </div>

          <div className="popular-cats-list-block">
            {props.menu?.categories?.map((i: any, index: any) => {
              return (
                <div
                  onClick={() => onClickCategory(i)}
                  key={`catPop${index}`}
                  className={`popular-cats-img ${blockClassnames[index].a}`}
                >
                  <img src={API_STORAGE + i.logo_url} />
                  <div className="popular-cats-info">
                    <Title20
                      title={i.name}
                      className={blockClassnames[index].b}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCats;
