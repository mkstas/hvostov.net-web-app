import { PropsWithChildren } from 'react';
import { DashboardProvider } from '@/shared/providers';
import { UiContainer } from '@/components';
import { TheHeader } from '@/widgets/the-header';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <DashboardProvider>
      <UiContainer>
        <TheHeader />
        <main className='pt-4 pb-16 lg:pb-4'>{children}</main>
      </UiContainer>
    </DashboardProvider>
  );
}
