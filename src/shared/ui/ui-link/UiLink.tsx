import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import { cn } from '@/shared/utils/cn';

interface Props extends PropsWithChildren {
  className?: string;
  href: string;
}

export const UiLink: FC<Props> = ({ children, className, href }) => {
  return (
    <Link
      href={href}
      className={cn(
        'text-indigo-600 outline-offset-3 outline-indigo-600 hover:underline',
        className,
      )}
    >
      {children}
    </Link>
  );
};
