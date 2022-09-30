import { PageHeader } from '@/components/common';
import { ContactForm } from '@/components/contact-us';
import { HeroHome } from '@/components/hero-section';
import { Layout } from '@/layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Services: NextPage = () => {
  return (
    <Layout title="Services">
      <PageHeader title="Services" />
    </Layout>
  );
};

export default Services;
