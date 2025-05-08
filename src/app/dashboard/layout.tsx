import { PropsWithChildren } from 'react';
import { AppLogotype } from '@/widgets/app-logotype';
import { HeaderMenu } from '@/widgets/header-menu';
import { UiContainer, UiSheet } from '@/shared/ui';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <UiContainer>
      <UiSheet className='rounded-t-none'>
        <header className='relative z-10 flex items-center justify-between gap-x-4'>
          <AppLogotype />
          <HeaderMenu />
        </header>
      </UiSheet>
      <main className='pt-4 pb-16 lg:pb-4'>{children}</main>
    </UiContainer>
  );
}
