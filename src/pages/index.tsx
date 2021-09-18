import Head from 'next/head';
import Teste from '@components/teste';

export default function App(): JSX.Element {
  return (
    <>
      <Head>
        <title>Markdown IDE</title>
      </Head>
      <Teste />
    </>
  );
}
