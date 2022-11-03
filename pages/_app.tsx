import '../css/design.css';
import '../css/style.css';
import '../css/responsive.css';
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import React, { useState } from 'react';
import Basket from './Basket';

function MyApp({ Component, pageProps }: AppProps) {
  const [basket, setBasket]: any = useState([]);
  const [open, setOpen]: any = useState(false);
  React.useEffect(() => {
    
  }, [basket])
  return (<>
        <Header open={open} setOpen={setOpen} basket={basket} />
        {
           open && <Basket basket={basket} setBasket={setBasket} setOpen={setOpen} open={open} />
        }
        <Component basket={basket} setBasket={setBasket} {...pageProps} />
        <Footer />
    </>)
}
export default MyApp
