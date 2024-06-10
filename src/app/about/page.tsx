import AboutPage from "@/components/aboutUs/AboutPage";
import { Metadata } from 'next';

// Static metadata
export const metadata: Metadata = {
  title: 'College Rivals | About Us',
  description: 'Indian College Esport Competition',
};

const Page = () => {
  return (
    <AboutPage />
  );
};

export default Page;
