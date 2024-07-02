import AcademicDetailsForm from '@/components/register/AcademicDetailsForm';
import AcademicDetailsPage from '@/components/register/AcademicDetailsPage';
import ESportsPage from '@/components/register/ESportsPage';
import { Metadata } from 'next';

// Static metadata
export const metadata: Metadata = {
  title: 'College Rivals | Register',
  description: 'Indian College Esport Competition',
};
export default function Page() {
  return <AcademicDetailsPage />;
}
