// import cookie from 'js-cookie';
import Link from "next/link";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setBasketItems } from '../../redux';

const Header = () => {

    const basketItems = useSelector((state: any) => state?.basketItems?.items);
    const dispatch = useDispatch();

    useEffect(() => {
        // cookie.remove("basketItems")
        dispatch(setBasketItems([]))
        // dispatch(setBasketItems(cookie.get("basketItems")?.split(",")))
        //eslint-disable-next-line
    }, [])

    // useEffect(() => {
    //     return (): any => { cookie.set("basketItems", basketItems) }
    // })

    return (

        <header className="header pt-64 mb-24">
            <div className="container">
                <div className="row-header">
                    <div className="col-left">
                        <button className="btn-category"><span className="humburger-menu"></span></button>
                        <div className="header-menu">
                            <a href="#" className="btn active">Комнаты</a>
                            <a href="#" className="btn">Товары</a>
                        </div>
                    </div>
                    <div className="col-center">
                        <Link href="/" replace={true}>
                            <a className="logotype">
                                <svg viewBox="0 0 40 35">
                                    <use href='/images/logo/logo.svg#logo'></use>
                                </svg>
                                <span className="logo-text">Jihaz</span>
                            </a>
                        </Link>
                    </div>
                    <div className="col-right">
                        <a href="#" className="btn btn-auto-link b-none">
                            <svg height="32" width="32">
                                <use href='/images/icons/heart.svg#root'></use>
                            </svg>
                        </a>
                        <Link href="/BasketOrder" replace={true}>
                            <a className="btn btn-auto-link b-none cart-basket">
                                <svg height="32" width="32">
                                    <use href='/images/icons/cart.svg#root'></use>
                                </svg>
                                <span className="qty-basket">{basketItems ? basketItems.length : "0"}</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
