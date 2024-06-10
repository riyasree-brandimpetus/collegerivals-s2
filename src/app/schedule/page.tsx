import SchedulePage from "@/components/schedule/SchedulePage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'College Rivals | Schedule',
  description: 'Indian College Esport Competition',
};
const Page = () => {
  return <SchedulePage/>;
};

export default Page;
