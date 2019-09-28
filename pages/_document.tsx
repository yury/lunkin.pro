import Document, {Main, Head, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="ru">
        <Head>
          <meta name="viewport" content="initial-scale=1.0" />
          <meta charSet="utf-8" />
          <script src="/static/wow.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
