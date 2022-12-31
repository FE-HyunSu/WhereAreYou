import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-style';
import { theme } from '../styles/theme';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
      window.Kakao.isInitialized();
    }
  }, []);
  return (
    <>
      <RecoilRoot>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="거기 지금 어디야" />
          <meta property="og:description" content="거기 지금 어디야" />
          <meta property="og:image" content="/img_meta.png" />
          <link rel="icon" href="/favicon.ico" />
          <title>🗺 거기 지금 어디야</title>
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
