import { HeaderNavLink } from "../Header";

const HeaderNav = () => {

    return (
  
      <nav className="nav mb-24">
        <div className="container">
          
          {/* nav-hover появляется только когда ты наводишь на ссылки */}
          <div className="row-nav ">
            <HeaderNavLink title="Акции" className="" />
            <HeaderNavLink title="Спальня" className="" />
            <HeaderNavLink title="Кухня" className="" />
            <HeaderNavLink title="Гостиная" className="" />
            <HeaderNavLink title="Для ванной" className="" />
            <HeaderNavLink title="Для офиса" className="" />
          </div>
        </div>
      </nav>
    );
  };
  
  export default HeaderNav;
  