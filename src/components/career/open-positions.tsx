import { __DEV__ } from '@/utils';
import React from 'react';

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

export const OpenPositions: React.FC = () => {
  return (
    <section className="bg-accents-100 text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-2 mb-20">
          <div className="col-span-12 md:col-span-4">
            <h4 className="font-semibold text-2xl text-primary">
              Current Openings
            </h4>
            <h2 className="font-bold text-4xl">
              Let&apos;s have an informal meeting!
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-6">
            <p>
              You can also <span className="text-primary">#RecruitUs</span> -
              after all, we have no secrets and are open to any of your
              questions!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2">
          {jobs.map((job, index) => (
            <div key={index} className="col-span-12 md:col-span-4">
              <div className="text-white rounded-lg shadow-lg p-4 border border-accents-200 hover:bg-black">
                <h3 className="font-bold text-2xl">{job.title}</h3>
                <div className="flex items-center mt-4">
                  <span className="text-gray-500 text-sm">{job.location}</span>
                  <span className="text-gray-500 text-sm mx-2">•</span>
                  <span className="text-gray-500 text-sm">{job.type}</span>
                  <span className="text-gray-500 text-sm mx-2">•</span>
                  <span className="text-gray-500 text-sm">
                    {job.salaryRange}
                  </span>
                </div>
                <a
                  href={job.link}
                  className="btn btn-invert mt-4 font-bold text-sm"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

if (__DEV__) {
  OpenPositions.displayName = 'OpenPositions';
}
