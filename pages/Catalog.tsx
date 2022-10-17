import { Breadcrumbs } from "../components";
import { PopularCats, SearchRoom } from "../containers";

const Catalog  = () => {
    
  return (
    <div className="catalog">
        <div className="container">
            <div className="row">
                <div className="col-md-12 pb-64">
                    <Breadcrumbs className="" />
                </div>
            </div>
        </div>
        <PopularCats />
        <SearchRoom />
    </div>
  );
}

export default Catalog;
