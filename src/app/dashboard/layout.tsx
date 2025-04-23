import { PropsWithChildren } from 'react';
import { DashboardProvider } from '@/shared/providers';
import { UiContainer } from '@/components';
import { TheHeader } from '@/widgets/the-header';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <DashboardProvider>
      <UiContainer>
        <TheHeader />
        <main className='py-4 pb-18'>{children}</main>
      </UiContainer>
    </DashboardProvider>
  );
}
