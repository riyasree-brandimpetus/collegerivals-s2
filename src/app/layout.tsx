import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Suspense } from "react";
import HeadAnalytics from "./HeadAnalytics";
import BodyAnalytics from "./BodyAnalytics";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "College Rivals | Home",
  description: "Indian College Esport Competition",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html translate="no" lang="en">
      <Suspense>
        <HeadAnalytics />
      </Suspense>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Suspense>
          <BodyAnalytics />
        </Suspense>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
