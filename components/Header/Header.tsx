import { observer } from "mobx-react-lite";
import Link from "next/link";
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
                <Link href="/" className={"logotype"}>
                    <span className="logo-text">
                        <svg viewBox="0 0 40 35">
                            <use href='/images/logo/logo.svg#logo'></use>
                        </svg>
                        Jihaz
                    </span>
                </Link>
            </div>
            <div className="col-center">
               
            </div>
            <div className="col-right">
                <a onClick={() => store.setFav()} href="#" className="btn btn-auto-link b-none">
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
