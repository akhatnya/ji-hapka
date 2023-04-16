import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useEffect } from "react";
import { useBasketStore } from "../providers/RootStoreProvider";
import { useScrollDirection } from "../utils/useDirection";

const Header = () => {
  const store = useBasketStore();
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`header pt-40 ${scrollDirection === "down" ? "down" : ""}`}
    >
      <div className="container mt-24 mb-24">
        <div className="row-header">
          <div className="col-left">
            <Link href="/" className="logotype">
              <span className="logo-text">
                <svg width="82" height="27" viewBox="0 0 82 27">
                  <use href="/images/logo/logo_m.svg#logo_m"></use>
                </svg>
              </span>
            </Link>
          </div>
          <div className="col-center"></div>
          <div className="col-right">
            <a
              onClick={() => store.setFav()}
              href="#"
              className="btn btn-auto-link b-none"
            >
              <svg height="32" width="32">
                <use href="/images/icons/heart.svg#root"></use>
              </svg>
            </a>
            <a
              href="#"
              onClick={() => store.setBasket(true)}
              className="btn btn-auto-link b-none cart-basket"
            >
              <svg height="32" width="32">
                <use href="/images/icons/cart.svg#root"></use>
              </svg>
              <span className="qty-basket">{store.getBasketSize()}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default observer(Header);
