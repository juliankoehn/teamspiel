import { PageHeader } from '@/components/common';
import { ContactForm } from '@/components/contact-us';
import { HeroHome } from '@/components/hero-section';
import { Consulting } from '@/components/services/consulting';
import { OurTools } from '@/components/services/our-tools';
import { Layout } from '@/layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Services: NextPage = () => {
  return (
    <Layout title="Services">
      <PageHeader title="Services" />
      <Consulting />
      <OurTools />
    </Layout>
  );
};

export default Services;
