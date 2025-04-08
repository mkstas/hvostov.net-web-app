import { FC } from 'react';
import Image from 'next/image';

export const UiLogo: FC = () => {
  return (
    <Image
      src='/logo.png'
      alt='Логотип'
      className='h-auto w-auto'
      width='130'
      height='27'
      priority={true}
    />
  );
};
