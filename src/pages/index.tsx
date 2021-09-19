import Head from 'next/head';
import Header from '@components/Header';
import Ide from '@components/Ide';

export default function App(): JSX.Element {
  return (
    <>
      <Head>
        <title>Markdown IDE</title>
      </Head>
      <Header />
      <Ide />
    </>
  );
}
