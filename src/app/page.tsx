import { Metadata } from 'next';
import { UiContainer } from '@/shared/ui-kit';
import { TheHeader } from '@/widgets/the-header';
import { AuthProvider } from './provider';

export const metadata: Metadata = {
  title: 'АнтиХвост',
};

export default function Root() {
  return (
    <AuthProvider>
      <UiContainer>
        <TheHeader />
      </UiContainer>
    </AuthProvider>
  );
}
