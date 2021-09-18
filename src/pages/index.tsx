import Head from 'next/head';
import Header from '@components/Header';

export default function App(): JSX.Element {
  return (
    <>
      <Head>
        <title>Markdown IDE</title>
      </Head>
      <Header />
    </>
  );
}
