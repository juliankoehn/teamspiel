import { Job } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';

const jobs = [
  {
    title: 'Senior TypeScript Developer',
    description: 'Help us make the Web. Better.',
    location: 'Stationary / Remote',
    type: 'Full Time',
    link: 'https://www.linkedin.com/jobs/view/2522020009/',
    salaryRange: '50k - 80k',
  },
  {
    title: 'Senior Backend Engineer',
    description: 'Help us make the Web. Better.',
    location: 'Stationary / Remote',
    type: 'Full Time',
    link: 'https://www.linkedin.com/jobs/view/2522020009/',
    salaryRange: '60k - 90k',
  },
  {
    title: 'Senior DevOps Engineer',
    description: 'Help us make the Web. Better.',
    location: 'Remote',
    type: 'Full Time',
    link: 'https://www.linkedin.com/jobs/view/2522020009/',
    salaryRange: '70k - 110k',
  },
  {
    title: 'System Administrator',
    description: 'Help us make the Web. Better.',
    location: 'Stationary',
    type: 'Full Time',
    link: 'https://www.linkedin.com/jobs/view/2522020009/',
    salaryRange: '50k - 70k',
  },
];

type Data = {
  data: Job[];
};

export const findJobs = (): Promise<Job[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jobs);
    }, 100);
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const jobs = await findJobs();

  res.status(200).json({ data: jobs });
}
