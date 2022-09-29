import { __DEV__ } from '@/utils';
import React, { memo } from 'react';

const benefits = [
  {
    title: 'Flexible working hours',
    description:
      'We believe in work-life balance. Work from anywhere, anytime.',
  },
  {
    title: 'Health insurance',
    description: 'We cover your health insurance and dental care.',
  },
  {
    title: 'Paid vacation',
    description: 'We give you 30 days of paid vacation per year.',
  },
  {
    title: 'Learning & development',
    description: 'We encourage you to learn and grow with us.',
  },
  {
    title: 'Remote work',
    description: 'You want it, you got it. Isn&apos;t that obvious?',
  },
];

export const CareerPromo: React.FC = memo(() => {
  return (
    <section className="bg-accents-100 text-white py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h4 className="font-semibold text-2xl text-primary">
            Why work with us?
          </h4>
          <h2 className="font-bold text-5xl">
            <span>Together we create a great place to work.</span> Get to know
            us and let us know you.
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-12 gap-2">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="col-span-12 md:col-span-4">
              <div className="text-white rounded-lg shadow-lg p-4 border border-accents-200 bg-black">
                <h3 className="font-bold text-2xl">{benefit.title}</h3>
                <p className="text-gray-500 text-sm mt-4">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h4 className="font-semibold text-7xl">
            you yearly spend <span className="text-primary">1963</span> hours at
            work.
          </h4>
          <h2 className="font-bold text-7xl">we want them to be fun</h2>
        </div>
      </div>
    </section>
  );
});

if (__DEV__) {
  CareerPromo.displayName = 'CareerPromo';
}
