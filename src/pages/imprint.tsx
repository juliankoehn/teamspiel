import { PageHeader } from '@/components/common';
import { ContactForm } from '@/components/contact-us';
import { HeroHome } from '@/components/hero-section';
import { Layout } from '@/layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Imprint: NextPage = () => {
  return (
    <Layout title="Imprint">
      <PageHeader title="Imprint" />
      <section className="bg-accents-100 text-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-2 mb-20">
            <div className="col-span-12 md:col-span-4">
              <h4 className="font-semibold text-2xl text-primary">Imprint</h4>
              <h2 className="font-bold text-4xl">Whos behind this website?</h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-6 space-y-4">
              <p className="mb-2 font-bold">teamspiel GmbH </p>
              <p className="mb-2">
                Unterj&ouml;rn 19a <br />
                24536 Neum&uuml;nster <br />
                Germany
              </p>
              <div className="h-px w-full bg-accents-200" />
              <p className="mb-2">
                Fleeth&ouml;rn 7 <br />
                24103 Kiel <br />
                Germany
              </p>
              <div className="h-px w-full bg-accents-200" />
              <p className="font-bold">Management Board</p>
              <p>
                Julian K&ouml;hn, CEO <br />
              </p>
              <p>
                Registered at Amtsgericht Charlottenburg Berlin, HRB 158855 B{' '}
                <br />
                Value Added Tax-ID: DE 354852154 <br />
                Tax Number: 20/298/56313 <br />
              </p>
              <p className="font-bold">Legal Note</p>
              <p>
                <a
                  href="http://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                >
                  Link to the platform of the European Commission
                </a>{' '}
                according to Regulation on consumer ODR. We are neither
                obligated nor willing to participate in a dispute settlement
                procedure at a consumer arbitration board.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Imprint;
