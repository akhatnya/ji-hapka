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

function MyApp({ Component, pageProps }: AppProps) {
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
        <Component {...pageProps} />
        {
          router.pathname !== "/order" && (
            <Footer />
          )
        }
    </RootStoreProvider>
  )
}
export default observer(MyApp)
