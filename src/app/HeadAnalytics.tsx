
import Script from "next/script";

export default function HeadAnalytics() {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
    return null;
  }
  return (
    <>
      {/* <!-- Google Tag Manager --> */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M6988CTG');
  `,
        }}
      />
      {/* <!-- Google Tag Manager --> */}
      {/* <!-- Meta Pixel Code --> */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '272329992192983');
  fbq('track', 'PageView');
`,
        }}
      />
      {/* <!-- Meta Pixel Code --> */}
    </>
  );
}
