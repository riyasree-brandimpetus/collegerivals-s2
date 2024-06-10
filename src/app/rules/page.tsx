import RulesPage from "@/components/rules/RulesPage";
import { Metadata } from 'next';

// Static metadata
export const metadata: Metadata = {
  title: 'College Rivals | Rules',
  description: 'Indian College Esport Competition',
};
const Page = () => {

  return <RulesPage/>;
};

export default Page;
