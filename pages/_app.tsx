import '../css/design.css';
import '../css/style.css';
import '../css/responsive.css';
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Basket from './Basket';
import { observer } from 'mobx-react-lite';
import {useEffect} from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script'
import Favorite from './Favorite';
import { getCookie, RootStoreProvider } from '../providers/RootStoreProvider';
import Submit from './Submit';
import useMobileDetect from '../utils/MobileDetect';
import ReactGA from "react-ga";
    
ReactGA.initialize("G-BF4W33WLJN");

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  let currentDevice = useMobileDetect();

  useEffect(() => {
    getCookie();
  }, [])

  return (
    <RootStoreProvider>
      <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-BF4W33WLJN`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-BF4W33WLJN');            
            `,
          }}
          />
          <Header />
          <Basket />
          <Favorite />
          <Submit />
          <Component {...pageProps} isMobile={currentDevice.isMobile()} device={currentDevice} />
          {
            router.pathname !== "/order" && (
              <Footer />
            )
          }
      </>
    </RootStoreProvider>
  )
}

export default MyApp
