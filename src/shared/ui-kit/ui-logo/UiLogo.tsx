import { FC } from 'react';
import Image from 'next/image';

export const UiLogo: FC = () => {
  return <Image src='/logo.png' alt='Логотип' width={130} height={26} />;
};
