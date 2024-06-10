import NewsAndUpdatesPage from "@/components/news-and-updates/NewsAndUpdatesPage";
import { Metadata } from "next";

// Static metadata
export const metadata: Metadata = {
  title: "College Rivals | News & Updates",
  description: "Indian College Esport Competition",
};
const Page = () => {
  return <NewsAndUpdatesPage />;
};

export default Page;
