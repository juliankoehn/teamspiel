import React from 'react';
import Image from 'next/image';

export interface HeroHomeProps {}

export const HeroHome: React.FC<HeroHomeProps> = (props) => {
  return (
    <section className="py-14 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex-wrap flex items-center overflow-hidden">
          <div className="w-full md:w-1/2 lg:w-1/2 order-2 md:order-1">
            <div className=" lg:mt-0">
              <h1 className="font-bold text-5xl text-white mb-4">
                Software development so collaborative, it&apos;s virtually built
                in-house.
              </h1>
              <p className="text-base md:text-xl text-white mb-4">
                We&apos;re not contractors, we&apos;re collaborators. A
                steadfast extension of your team, grounded in a developmental
                culture and rock solid engineering, ready to tackle the most
                complex of technical and collaboration challenges.
              </p>
              <p className="text-base md:text-xl text-white">
                Create new revenue streams by shipping products that win in the
                market
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <Image
                src="/images/cyber_banner_image.svg"
                alt="hero"
                width={546}
                height={367}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
