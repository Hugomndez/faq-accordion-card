import { type AppProps } from 'next/app';
import { Kumbh_Sans } from 'next/font/google';
import '../styles/globals.css';

const kumbhSans = Kumbh_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style
        jsx
        global>{`
        html {
          font-family: ${kumbhSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
