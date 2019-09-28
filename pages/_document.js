import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="ru">
        <Head>
          <title>Lunkin.pro</title>
          <meta name="viewport" content="initial-scale=1.0" />
          <meta charset="utf-8" />
          <script src="/static/wow.min.js" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <script>new WOW().init();</script>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
