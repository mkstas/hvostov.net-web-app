import { FC } from 'react';
import { Pacifico } from 'next/font/google';
import { cn } from '@/shared/ui/cn';

const pacifico = Pacifico({ subsets: ['cyrillic-ext', 'latin-ext'], weight: '400' });

interface Props {
  className?: string;
}

export const AppLogotype: FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-center gap-x-2', pacifico.className, className)}>
      <svg width='32' height='32' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M5.42469 3.14109C3.73667 5.62892 2.11336 6.34106 1 5.89494C1.30033 6.9045 3.45736 8.30455 4.83123 9.11032C5.42303 9.45731 5.59615 10.2477 5.1841 10.7951C4.43024 11.7975 3.38657 13.2141 3.21234 13.6057C-0.684701 20.65 7.90362 23.3257 12.0617 22.9688C24.3093 21.9179 23.8729 12.3957 22.0173 8.64878C17.5638 16.3562 10.6895 11.9066 10.9556 10.3011C11.2216 8.6956 13.0529 9.01504 13.721 6.44571C14.8343 1.36101 7.84389 -1.0453 5.42469 3.14109Z'
          fill='#425CF9'
          stroke='#425CF9'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M9.29639 15.8088C10.6791 17.7365 14.8272 19.6642 18.1458 16.9104'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.19016 6.44563C8.80108 6.44563 9.29633 5.95245 9.29633 5.34409C9.29633 4.73573 8.80108 4.24255 8.19016 4.24255C7.57923 4.24255 7.08398 4.73573 7.08398 5.34409C7.08398 5.95245 7.57923 6.44563 8.19016 6.44563Z'
          fill='white'
        />
      </svg>
      <div className='text-2xl'>АнтиXвост</div>
    </div>
  );
};
