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
          <div className="col-left"></div>
          <div className="col-center">
            <Link href="/" className="logotype">
              <span className="logo-text">
                <img src="/images/logo/logo-m.svg" alt="" />
              </span>
            </Link>
          </div>
          <div className="col-right">
            <a
              onClick={() => store.setFav()}
              href="#"
              className="btn btn-auto-link b-none cart-basket"
            >
              <img src="/images/icons/heart.svg" alt="" />
              <span className="qty-basket">{store.getFavSize()}</span>
            </a>
            <a
              href="#"
              onClick={() => store.setBasket(true)}
              className="btn btn-auto-link b-none cart-basket"
            >
              <img src="/images/icons/cart.svg" alt="" />
              <span className="qty-basket">{store.getBasketSize()}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default observer(Header);
