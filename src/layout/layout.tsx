import { cx, __DEV__ } from '@/utils';
import { NextSeo } from 'next-seo';
import React, { memo } from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

export interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = memo((props) => {
  const { children, className, title, description } = props;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        defaultTitle="teamspiel"
        titleTemplate="%s - teamspiel"
      />
      <div className={cx('main-wrapper min-h-screen', className)}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
});

if (__DEV__) {
  Layout.displayName = 'Layout';
}
