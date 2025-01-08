import AcademicDetailsPage from '@/components/register/AcademicDetailsPage';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

// Static metadata
export const metadata: Metadata = {
  title: 'College Rivals | Register',
  description: 'Indian College Esport Competition',
};
export default function Page() {
  redirect('/my-profile');
  // return <AcademicDetailsPage />;
}
