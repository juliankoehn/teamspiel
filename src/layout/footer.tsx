import { __DEV__ } from '@/utils';
import Link from 'next/link';
import React, { memo } from 'react';
import { FiGithub } from 'react-icons/fi';

export const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-accents-100 pt-16 text-sm text-accents-500 border-t border-accents-200 sticky top-[100vh]">
      <div className="mx-auto max-w-7xl pt-4 pb-5 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <span>
            &copy; {new Date().getFullYear()} teamspiel GmbH. All rights
            reserved.
          </span>
          <span>
            <ul className="m-0 p-0 list-none inline-flex items-center divide-x divide-accents-200">
              <li className="inline-flex mr-4 pr-4 box-border leading-none">
                <Link href="https://github.com/teamspiel" target="_blank">
                  <a className="text-accents-500 no-underline text-sm transition-all inline-block hover:text-white">
                    <FiGithub className="w-5 h-5" />
                  </a>
                </Link>
              </li>
            </ul>
          </span>
          <div className="flex flex-row space-x-2">
            <Link href="/imprint">
              <a
                className="text-accents-500 no-underline text-sm transition-all inline-block hover:text-white"
                title="Our GitHub"
              >
                Imprint
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

if (__DEV__) {
  Footer.displayName = 'Footer';
}
