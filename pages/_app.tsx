import '../css/design.css';
import '../css/style.css';
import '../css/responsive.css';
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { RootStoreProvider} from '../providers/RootStoreProvider';
import Basket from './Basket';
import { observer } from 'mobx-react-lite';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootStoreProvider>
        <Header />
        <Basket />
        <Component {...pageProps} />
        <Footer />
    </RootStoreProvider>
  )
}
export default observer(MyApp)
