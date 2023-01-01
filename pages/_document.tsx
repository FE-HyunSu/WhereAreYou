import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/svg" />
          <meta property="og:title" content="✨ 거기 지금 어디야" />
          <meta property="og:image" content="" />
          <meta property="og:description" content="🙋 거기 지금 어디야" />
          <meta property="og:url" content="" />
          <meta name="description" content="✨ 거기 지금 어디야" />
          <meta name="keywords" content="🙋 거기 지금 어디야" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="preload"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <Script
            src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=e30615da0741576c4249e7b7b3dec4ab&libraries=services&autoload=false"
            strategy="beforeInteractive"
          />
          <Script src="https://developers.kakao.com/sdk/js/kakao.js" strategy="beforeInteractive" />
        </Head>
        <body>
          <Main />
          <div id="_modal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
