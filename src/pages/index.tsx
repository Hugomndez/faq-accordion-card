import { Accordion, Attribution, FAQCard } from 'components';
import { data } from 'db/data';
import { type NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | FAQ Accordion Card</title>
        <meta
          name='description'
          content='Frontend Mentor Challenge'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
      </Head>
      <main>
        <FAQCard>
          <Accordion {...data} />
        </FAQCard>
        <Attribution />
      </main>
    </>
  );
};

export default Home;
