import { AppProps } from 'next/app';
import GlobalStyle from '../GlobalStyle';

function index({ Component, pageProps }:AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default index;
