import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useBasketStore } from "../../providers/RootStoreProvider";
import {useScrollDirection} from '../../utils/useDirection';

const Header = () => {
  const store = useBasketStore();
  const scrollDirection = useScrollDirection();

  return (

    <header className={`header pt-40 ${scrollDirection === "down" ? "down" : ''}`}>
      <div className="container mt-24 mb-24">
        <div className="row-header">
            <div className="col-left">
            <a href="/" className="logotype">
                    <svg viewBox="0 0 40 35">
                        <use href='/images/logo/logo.svg#logo'></use>
                    </svg>
                    <span className="logo-text">Jihaz</span>
                </a>
            </div>
            <div className="col-center">
               
            </div>
            <div className="col-right">
                <a href="#" className="btn btn-auto-link b-none">
                    <svg height="32" width="32">
                        <use href='/images/icons/heart.svg#root'></use>
                    </svg>
                </a>
                <a href="#" onClick={() => store.setBasket()} className="btn btn-auto-link b-none cart-basket">
                    <svg height="32" width="32">
                        <use href='/images/icons/cart.svg#root'></use>
                    </svg>
                    <span className="qty-basket">
                        {store.getBasketSize()}
                    </span>
                </a>
            </div>
        </div>
      </div>
    </header>
  );
};

export default observer(Header);
