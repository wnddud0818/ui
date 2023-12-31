import { AppProps } from 'next/app';
import '../styles/global.css';
import { Noto_Sans_KR as notoSansKr } from 'next/font/google';
import Layout from '@/components/layouts/Layout';
import { Provider } from 'jotai';

const inter = notoSansKr({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <main className={inter.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </Provider>
  );
}
