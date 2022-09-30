import { __DEV__ } from '@/utils';
import React, { memo } from 'react';

export const Consulting: React.FC = memo(() => {
  return (
    <section className="bg-accents-100 border-t border-accents-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-2 py-24">
          <div className="col-span-12 text-center">
            <h2 className="font-bold text-6xl text-white pb-20">
              Consulting &amp; Expertise
            </h2>
          </div>
          <div className="col-span-12 text-center text-white">
            <p className="text-2xl font-semibold">
              There may be a problem with your product that you don&apos;t know
              how to solve, or your product might be just fine, but it could
              work better. In either case, you need the best people in your
              business vertical to discuss your product with you and determine
              how to help you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

if (__DEV__) {
  Consulting.displayName = 'Consulting';
}
