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
import Favorite from './Favorite';
import { getCookie, RootStoreProvider } from '../providers/RootStoreProvider';
import Submit from './Submit';

function MyApp({ Component, pageProps, isMobile }: any) {
  const router = useRouter();
  useEffect(() => {
    getCookie();
  }, [])

  return (
    <RootStoreProvider>
        <Header />
        <Basket />
        <Favorite />
        <Submit />
        <Component {...pageProps} isMobile />
        {
          router.pathname !== "/order" && (
            <Footer />
          )
        }
    </RootStoreProvider>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
  let isMobile = true;

  if (appContext.ctx.req){
    const UA = appContext.ctx.req.headers["user-agent"];
    
    isMobile = Boolean(
      UA.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
  }

  return {
    isMobile
  }
}

export default observer(MyApp)
