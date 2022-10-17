import { SubTitle16 } from "../../Typography";

interface NavProps {
    className: string;
    title: string;
}
const HeaderNavLink  = (props: NavProps) => {
    const { className, title } = props;

    return (
      <div className="nav-item-link">
        <a href="#" className={`nav-link ${className}`}>{title}</a>
        <div className="nav-subcategory">
          <div className="container">
            <div className="row-nav-subcategory">

              <div className="nav-col">
                <SubTitle16 title="Диваны и кресла" className="font-700 mb-16"/>
                <ul>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                </ul>
              </div>

              <div className="nav-col">
                <SubTitle16 title="Диваны и кресла" className="font-700 mb-16"/>
                <ul>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                </ul>
              </div>
              <div className="nav-col">
                <SubTitle16 title="Диваны и кресла" className="font-700 mb-16"/>
                <ul>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                </ul>
              </div>
              <div className="nav-col">
                <SubTitle16 title="Диваны и кресла" className="font-700 mb-16"/>
                <ul>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                  <li><a href="#" className="nav-sublink">Прямые диваны</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeaderNavLink;
  