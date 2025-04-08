import { PropsWithChildren } from 'react';
import { AuthContentProvider } from '@/shared/providers';
import { UiContainer } from '@/shared/ui';
import { TheHeader } from '@/widgets/the-header';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <AuthContentProvider>
      <UiContainer>
        <TheHeader />
        <main className='py-4'>{children}</main>
      </UiContainer>
    </AuthContentProvider>
  );
}
