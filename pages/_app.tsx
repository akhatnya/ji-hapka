import '../css/design.css';
import '../css/responsive.css';
import '../css/style.css';
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Provider } from "react-redux";
import store from "../store"
function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>

  </>)
}
export default MyApp
