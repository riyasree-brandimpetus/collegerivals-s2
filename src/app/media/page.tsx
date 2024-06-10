import MediaPage from "@/components/media/MediaPage";
import { Metadata } from "next";

// Static metadata
export const metadata: Metadata = {
  title: "College Rivals | Media",
  description: "Indian College Esport Competition",
};

const Page = () => {
  return <MediaPage />;
};

export default Page;
