import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import '../styles/globals.scss'; // Global styles
import 'fullpage.js/dist/fullpage.css';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
