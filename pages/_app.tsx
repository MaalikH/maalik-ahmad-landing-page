import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import '../styles/globals.scss'; // Global styles
import 'fullpage.js/dist/fullpage.css';

export default function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}
