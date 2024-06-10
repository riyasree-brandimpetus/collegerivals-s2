import PrivacyPage from '@/components/privacy/PrivacyPage';
import { Metadata } from 'next';

// Static metadata
export const metadata: Metadata = {
  title: 'College Rivals | Privacy Policy',
  description: 'Indian College Esport Competition',
};
const Page = () => {
  return <PrivacyPage/>;
};

export default Page;