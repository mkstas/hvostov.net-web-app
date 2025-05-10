import { PropsWithChildren } from 'react';
import { UiContainer, UiSheet } from '@/shared/ui';
import { TheLogo } from '@/widgets/the-logo';
import { TheHeaderMenu } from '@/widgets/the-header-menu';
import { DashboardProvider } from '@/shared/providers';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <DashboardProvider>
      <UiContainer>
        <UiSheet className='rounded-t-none'>
          <header className='relative z-10 flex items-center justify-between gap-x-4'>
            <TheLogo />
            <TheHeaderMenu />
          </header>
        </UiSheet>
        {children}
      </UiContainer>
    </DashboardProvider>
  );
}
