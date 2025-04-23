import { FC } from 'react';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const UiLogo: FC<Props> = ({ className }) => {
  return <Image src='/logo.png' alt='Логотип' className={className} width='130' height='27' priority={true} />;
};
