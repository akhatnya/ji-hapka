import { SideBar } from "../components";

const Basket  = () => {
    
  return (
    <div className="mobile-scroll">
      <div className="mobile-scroll-inner">
        <div className="scroll-close"></div>
        <div className="basket">
            <SideBar className="active"/>
        </div>
      </div>
    </div>
  );
}

export default Basket;
