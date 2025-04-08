import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';

interface Props extends PropsWithChildren {
  href: string;
}

export const UiButtonLink: FC<Props> = ({ children, href }) => {
  return (
    <Link
      href={href}
      className='bg-blue outline-blue hover:bg-blue-dark rounded-xl px-4 py-3 text-center font-medium text-white outline-offset-3 transition-colors'
    >
      {children}
    </Link>
  );
};
