import { __DEV__ } from '@/utils';
import React, { memo } from 'react';

export const CareerPromo: React.FC = memo(() => {
  return <div>Promo</div>;
});

if (__DEV__) {
  CareerPromo.displayName = 'CareerPromo';
}
