import '../css/design.css';
import '../css/responsive.css';
import '../css/style.css';
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
        <Header />
          <Component {...pageProps} />
        <Footer />
    </>)
}
export default MyApp
