import { FC } from 'react';
import Image from 'next/image';
import { cn } from '@/shared/utils';

interface Props {
  className?: string;
}

export const UiLogo: FC<Props> = ({ className }) => {
  return (
    <Image
      src='/logo.png'
      alt='Логотип'
      className={cn('h-auto w-auto', className)}
      width='130'
      height='27'
      priority={true}
    />
  );
};
