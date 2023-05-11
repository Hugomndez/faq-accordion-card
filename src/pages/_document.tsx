import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang='en'
      dir='ltr'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
