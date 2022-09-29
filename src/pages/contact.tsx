import { PageHeader } from '@/components/common';
import { ContactForm } from '@/components/contact-us';
import { HeroHome } from '@/components/hero-section';
import { Layout } from '@/layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Contact: NextPage = () => {
  return (
    <Layout>
      <PageHeader title="More than just outsourcing: proactive &amp; reliable tech partnership" />
      <ContactForm />
    </Layout>
  );
};

export default Contact;
