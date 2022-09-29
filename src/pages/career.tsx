import { CareerPromo, OpenPositions } from '@/components/career';
import { PageHeader } from '@/components/common';
import { Layout } from '@/layout';
import { NextPage } from 'next';
import React from 'react';

export const Career: NextPage = () => {
  return (
    <Layout>
      <PageHeader title="Join Us" description="Help us make the Web. Better." />
      <OpenPositions />
      <CareerPromo />
    </Layout>
  );
};

export default Career;
