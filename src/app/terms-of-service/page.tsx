import TermsPage from "@/components/terms/TermsPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'College Rivals | Terms Of Service',
  description: 'Indian College Esport Competition',
};
const Page = () => {
  return <TermsPage/>;
};

export default Page;