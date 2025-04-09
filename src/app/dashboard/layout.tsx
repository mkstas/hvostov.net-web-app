import { UiContainer } from '@/components';
import { DashboardProvider } from '@/shared/providers';
import { TheHeader } from '@/widgets/the-header';
import { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <DashboardProvider>
      <UiContainer>
        <TheHeader />
        <main className='py-4'>{children}</main>
      </UiContainer>
    </DashboardProvider>
  );
}
