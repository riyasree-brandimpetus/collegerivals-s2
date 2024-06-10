import RegisterPage from "@/components/register/RegisterPage";
import { Metadata } from 'next';

// Static metadata
export const metadata: Metadata = {
  title: 'College Rivals | Register',
  description: 'Indian College Esport Competition',
};
export default function Page() {

  return <RegisterPage/>;
}