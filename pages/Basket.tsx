import React from 'react';
import { SideBar } from "../components";

const Basket  = (props: any) => {
    const {open, setOpen, basket, setBasket} = props;
  return (
    <div className="mobile-scroll">
      <div className="mobile-scroll-inner">
        <div className="scroll-close"></div>
        <div className="basket">
            <SideBar basket={basket} setBasket={setBasket} setOpen={() => setOpen(!open)} className="active"/>
        </div>
      </div>
    </div>
  );
}

export default Basket;
