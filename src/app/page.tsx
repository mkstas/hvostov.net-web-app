import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/shared/routes';

export const metadata: Metadata = {
  title: 'АнтиХвост',
};

export default function Index() {
  redirect(ROUTES.LOGIN);
}
