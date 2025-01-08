import CompletionPage from "@/components/register/CompletionPage";
import { Metadata } from "next";
import { redirect } from "next/navigation";

// Static metadata
export const metadata: Metadata = {
  title: "College Rivals | Registration Successful",
  description: "Indian College Esport Competition",
};

export default function Page() {
  redirect('/my-profile');
  // return <CompletionPage />;
}
