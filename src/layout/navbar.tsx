import { cx } from '@/utils';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { routes } from './routes';
import { MobileNavigation } from './mobile-navbar';
import Headroom from 'react-headroom';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export interface NavbarProps {
  dark?: boolean;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { dark = true, className } = props;

  const { pathname } = useRouter();

  const [isOpen, setOpen] = useState(false);

  const getActiveClass = useCallback(
    (path: string, absolute?: boolean) => {
      if (absolute) {
        return pathname === path ? 'text-white' : 'text-accents-500';
      }

      return pathname.startsWith(path) ? 'text-white' : 'text-accents-500';
    },
    [pathname]
  );

  return (
    <>
      <Headroom disableInlineStyles>
        <header className={cx('main-header', 'w-full', className)}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className={cx('relative z-50 flex justify-between h-16')}>
              <div className="flex items-center md:gap-x-12 w-full">
                <Link href="/">
                  <a className="flex items-center no-underline font-bold text-slate-200">
                    teamspiel
                  </a>
                </Link>
                <div className="hidden md:flex md:gap-x-6">
                  {routes.map((route) => (
                    <Link key={route.label} href={route.href}>
                      <a
                        className={cx(
                          'inline-block p-2 text-sm  hover:text-white no-underline transition-colors',
                          getActiveClass(route.href, route.absolute)
                        )}
                      >
                        {route.label}
                      </a>
                    </Link>
                  ))}
                </div>
                <div className="flex-1 flex items-center md:hidden">
                  <button
                    type="button"
                    role="button"
                    className=" p-2 rounded-md text-gray-400 ml-auto"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <HiMenu className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </Headroom>
      <MobileNavigation isOpen={isOpen} onClose={setOpen} />
    </>
  );
};
