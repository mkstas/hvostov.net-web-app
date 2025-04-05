import { Metadata } from 'next';
import { UiContainer } from '@/shared/ui-kit';
import { TheHeader } from '@/widgets/the-header';

export const metadata: Metadata = {
  title: 'АнтиХвост',
};

export default function Root() {
  return (
    <UiContainer>
      <TheHeader />
    </UiContainer>
  );
}
