import { cx, __DEV__ } from '@/utils';
import React, { memo } from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

export interface LayoutProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = memo((props) => {
  const { children, className } = props;

  return (
    <div className={cx('main-wrapper', className)}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
});

if (__DEV__) {
  Layout.displayName = 'Layout';
}
