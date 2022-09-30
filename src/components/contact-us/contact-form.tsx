import { __DEV__ } from '@/utils';
import React, { memo } from 'react';
import { HiMail } from 'react-icons/hi';

export const ContactForm: React.FC = memo(() => {
  return (
    <section
      className="contact-us-form py-28"
      style={{
        background: "url('/images/contact-us-bg.svg')no-repeat center bottom",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid  grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-8 lg:col-span-6 text-white">
            <div className="mb-12">
              <h2 className="text-xl lg:text-4xl mb-2">
                Talk to Our Sales & Marketing Department Team
              </h2>
              <p className="mb-4 mt-0">
                Our dedicated agile teams can help you create a highly
                performant and scalable web application that users understand.
              </p>
            </div>
            <form
              action="/api/forms/contact"
              method="post"
              className="register-form"
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-2 gap-6">
                  <label className="block">
                    <span className="text-slate-100">First name</span>
                    <input
                      type="text"
                      autoComplete="given-name"
                      name="firstName"
                      className="
                            mt-1
                            block
                            w-full
                            rounded-md
                            border-gray-300
                            shadow-sm
                            text-slate-900
                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        "
                      placeholder=""
                    />
                  </label>
                  <label className="block">
                    <span className="text-slate-100">Last name</span>
                    <input
                      type="text"
                      autoComplete="family-name"
                      name="lastName"
                      className="
                            mt-1
                            block
                            w-full
                            rounded-md
                            border-gray-300
                            shadow-sm
                            text-slate-900
                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        "
                      placeholder=""
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-slate-100">Email address</span>
                  <input
                    type="text"
                    autoComplete="email"
                    name="email"
                    className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    text-slate-900
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    placeholder=""
                  />
                </label>
                <label className="block">
                  <span className="text-slate-100">Phone</span>
                  <input
                    type="tel"
                    autoComplete="tel"
                    name="phone"
                    className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    text-slate-900
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    placeholder=""
                  />
                </label>
                <label className="block">
                  <span className="text-gray-100">Additional details</span>
                  <textarea
                    name="message"
                    className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                     text-slate-900
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    rows={3}
                  />
                </label>
                <div>
                  <button type="submit" className="btn">
                    <HiMail className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                    Get in Touch
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-6 text-white"></div>
        </div>
      </div>
    </section>
  );
});

if (__DEV__) {
  ContactForm.displayName = 'ContactForm';
}
