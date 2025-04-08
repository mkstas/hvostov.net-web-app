import { FC } from 'react';
import Image from 'next/image';
import logo from '@/shared/assets/logo.png';

export const UiLogo: FC = () => {
  return (
    <Image
      src={logo}
      alt='Логотип'
      className='h-auto w-auto'
      width='130'
      height='27'
      priority={true}
    />
  );
};
