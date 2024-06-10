import ContactPage from "@/components/contact-us/ContactPage";
import { Metadata } from 'next';

// Static metadata
export const metadata: Metadata = {
  title: 'College Rivals | Contact Us',
  description: 'Indian College Esport Competition',
};
 
const Page = () => {
  return (
   <ContactPage/>
  );
};

export default Page;
