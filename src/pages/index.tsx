import { Accordion, FAQCard } from 'components';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import type { Data } from '../types/data';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | FAQ Accordion Card</title>
        <meta name='description' content='Frontend Mentor Challenge' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
      </Head>
      <FAQCard>
        <Accordion {...data} />
      </FAQCard>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{
  data: Data;
}> = async context => {
  const response = await fetch('http://localhost:3000/api/data');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
