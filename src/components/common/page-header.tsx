import { __DEV__ } from '@/utils';
import React, { memo } from 'react';
import Link from 'next/link';

export interface PageHeaderProps {
  title: string;
  description?: string;
  integration?: boolean;
  blogtags?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = memo((props) => {
  const { integration, blogtags, title, description } = props;

  return (
    <>
      {integration ? (
        <section
          className="page-header position-relative overflow-hidden ptb-120 bg-dark"
          style={{
            background:
              "url('/images/page-header-bg.svg')no-repeat bottom left",
          }}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-8 col-12">
                <div className="company-info-wrap align-items-center">
                  <div className="company-logo p-4 bg-white shadow rounded-custom me-4 mt-2">
                    <div className="logo justify-content-center">
                      <img
                        src="/integations/2.png"
                        alt="company logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="company-overview">
                    <h1 className="display-5 fw-bold">{title}</h1>
                    <p className="lead mb-0">{description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="action-btns mt-4 mt-lg-0 mt-xl-0">
                  <Link href="#">
                    <a className="btn btn-outline-light">Connect with Google</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
          </div>
        </section>
      ) : (
        <section
          className="relative overflow-hidden py-14 md:py-36"
          style={{
            background:
              "url('/images/page-header-bg.svg')no-repeat bottom left",
          }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`row ${
                blogtags ? 'justify-content-center text-center' : ''
              }`}
            >
              <div className="col-lg-8 col-md-12 text-white max-w-xl">
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="lead">{description}</p>
              </div>
            </div>
            {blogtags ? (
              <div className="row justify-content-center text-center">
                <div className="col-xl-8">
                  <Link href="#">
                    <a className="btn btn-soft-primary btn-pill btn-sm m-2">
                      Marketing
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="btn btn-soft-primary btn-pill btn-sm m-2">
                      {' '}
                      Sales
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="btn btn-soft-primary btn-pill btn-sm m-2">
                      {' '}
                      Design
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="btn btn-soft-primary btn-pill btn-sm m-2">
                      {' '}
                      Development
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="btn btn-soft-primary btn-pill btn-sm m-2">
                      {' '}
                      Product Design
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="btn btn-soft-primary btn-pill btn-sm m-2">
                      {' '}
                      Customers
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="btn btn-soft-primary btn-pill btn-sm m-2">
                      {' '}
                      Agency
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="btn btn-soft-primary btn-pill btn-sm m-2">
                      {' '}
                      Investors
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="btn btn-soft-primary btn-pill btn-sm m-2">
                      Research
                    </a>
                  </Link>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </section>
      )}
    </>
  );
});

if (__DEV__) {
  PageHeader.displayName = 'PageHeader';
}
