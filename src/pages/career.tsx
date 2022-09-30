import { CareerPromo, OpenPositions } from '@/components/career';
import { PageHeader } from '@/components/common';
import { Layout } from '@/layout';
import { Job } from '@/types';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { findJobs } from './api/jobs';

export interface CareerProps {
  jobs: Job[];
}

export const Career: NextPage<CareerProps> = (props) => {
  const { jobs } = props;

  return (
    <Layout title="Career">
      <PageHeader title="Join Us" description="Help us make the Web. Better." />
      <OpenPositions jobs={jobs} />
      <CareerPromo />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const jobs = await findJobs();

  return {
    props: {
      jobs,
    },
  };
};

export default Career;
