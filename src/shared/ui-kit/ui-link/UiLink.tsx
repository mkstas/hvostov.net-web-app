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
        'text-custom-blue outline-custom-blue outline-offset-3 not-hover:underline',
        className,
      )}
    >
      {children}
    </Link>
  );
};
