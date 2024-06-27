'use client';

import Image from "next/image";

export default function BodyAnalytics() {

  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
    return null;
  }
  return (
    <>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-M6988CTG"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}

      {/* <!-- Meta Pixel Code (noscript)  --> */}
      <noscript>
        <Image
        alt=""
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=272329992192983&ev=PageView&noscript=1"
        />
      </noscript>
      {/* <!-- End of Meta Pixel Code  (noscript) --> */}
    </>
  );
}
