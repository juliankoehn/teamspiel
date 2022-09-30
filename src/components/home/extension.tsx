import { __DEV__ } from '@/utils';
import React, { memo } from 'react';

const Teaser = [
  {
    title: 'Team Extension',
    hanger:
      "If you're short on tech specialists, missing deadlines, or going over budget—we're here for you.",
    description:
      'We can help you build a team of developers, designers, and project managers to get your project done on time and on budget.',
  },
  {
    title: 'End-to-end Development',
    hanger: "The world needs your ideas. Let's turn them into products.",
    description:
      'We deliver end-to-end development services for web and mobile applications. We can help you build your MVP, launch your product, and scale your business.',
  },
  {
    title: 'Consulting & Training',
    hanger:
      'We can plug into your organization to help you innovate and transform faster..',
    description:
      'We have a team of experts who can help you build a culture of innovation and collaboration. We can also help you train your team to build better products.',
  },
];

export const Extension: React.FC = memo(() => {
  return (
    <section className="bg-accents-100 border-t border-accents-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-2 divide-x divide-accents-200">
          {Teaser.map((teaser) => (
            <div key={teaser.title} className="col-span-12 md:col-span-4">
              <div className="text-white rounded-lg shadow-lg p-4">
                <h3 className="font-bold text-2xl">{teaser.title}</h3>
                <div className="pl-3 border-l border-primary">
                  <p className="text-white text-sm mt-4">{teaser.hanger}</p>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  {teaser.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

if (__DEV__) {
  Extension.displayName = 'Extension';
}
