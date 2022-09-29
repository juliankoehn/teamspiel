import { HeroHome } from '@/components/hero-section';
import { Layout } from '@/layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroHome />
      hello world
    </Layout>
  );
};

export default Home;
