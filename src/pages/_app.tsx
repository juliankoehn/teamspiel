import '@assets/scss/main.scss';
import '@assets/fonts/fontawesome-all.min.css';
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp