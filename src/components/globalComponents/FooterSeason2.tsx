import Image from "next/image";
import Link from "next/link";

const FooterSeason2 = () => {
  return (
    <div className="bg-black">
      <div className="footer-container rounded-t-[2.5rem] flex-col w-full overflow-x-hidden bg-#171819">
        <div
          className="footer-top-container  flex px-1.5rem lg:px-5rem pt-2rem lg:pt-10 pb-4 lg:pb-2.5rem w-full justify-center lg:justify-between
        items-center flex-col lg:flex-row max-screen-desktop mx-auto"
        >
          <h2 className="ppFormula-font text-white flex gap-2 font-light text-1.75rem uppercase lg:text-7xl italic">
            Register
            <span className="outline-text">GAMES BEGIN</span>
          </h2>
          <Link href='/sign-up' className="clip-bg-pink rounded-lg max-lg:hidden">
            <button className="custom-button-pink px-20 py-5 text-lg text-white rounded-lg bg-cover helvetica-font">
            REGISTER NOW
            </button>
          </Link>
        </div>
        <div className="footer-bottom-container pt-3.125rem lg:pt-3.813rem pb-4 lg:pb-1.375rem w-full bg-black flex-col">
          <div className="logo-container flex justify-center items-center gap-10 lg:px-1.5rem pb-3.125rem max-screen-desktop lg:mx-auto ml-1.56rem">
            <Image
              src="../footer-logo.svg"
              alt="footer-logo"
              width={104}
              height={58}
              loading="lazy"
            />
             <Image
              src="/sponsor-six-new.svg"
              alt="footer-logo"
              width={63}
              height={79}
              loading="lazy"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="text-center helvetica-extralight-font font-light text-lg text-[#787777] w-80% lg:w-50.5%">To participate in College Rivals 2023, you need to be a college student from one of the top 25 colleges in India. Keep an eye out for the registration drive and follow the instructions to sign up and join the thrilling esports competition.</p>
          </div>

          <div className=" pt-8 flex w-full justify-center items-center px-1.5rem lg:px-5rem max-screen-desktop mx-auto">
            <div className="justify-center max-lg:flex-wrap items-center flex gap-4 lg:gap-8 flex-row">
              <Link
                href="/esports"
                className="helvetica-font  text-white hover:text-#DBFD67 text-12px pt-2rem lg:pt-0 no-underline hover:no-underline"
              >
           ESPORTS
              </Link>
              <Link
                href="/about"
                className="helvetica-font  text-white hover:text-#DBFD67 text-12px  pt-2rem lg:pt-0 no-underline hover:no-underline"
              >
               ABOUT US
              </Link>
              <Link
              target="_blank"
                href="/https://store.collegerivals.com/"
                className="helvetica-font  text-white hover:text-#DBFD67 text-12px  pt-2rem lg:pt-0 no-underline hover:no-underline"
              >
            STORE
              </Link>
              {/* <Link
                href="/"
                className="helvetica-font  text-white hover:text-pink text-12px  pt-2rem lg:pt-0 no-underline hover:no-underline"
              >
             NEWS & UPDATES
              </Link>
              <Link
                href="/"
                className="helvetica-font  text-white hover:text-pink text-12px pt-2rem lg:pt-0 no-underline hover:no-underline"
              >
              MEDIA
              </Link> */}
            </div>
          
          </div>
          <div
            className="social-links-container items-center flex justify-between w-full max-xl:gap-7 lg:pt-12 lg:pb-14
          px-1.5rem lg:px-5rem flex-col-reverse xl:flex-row max-screen-desktop mx-auto"
          >
            <div className="social-icons-container flex mb-2.5rem lg:mb-0">
              <Link
                href="https://twitter.com/collegerivalsin"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:opacity-70%"
              >
                <Image
                  src="../twitter-new.svg"
                  alt="twitter"
                  height={50}
                  width={50}
                />
              </Link>

              <Link
                href="https://bit.ly/crdiscordweb"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1.25rem lg:ml-1.188rem hover:opacity-70%"
              >
                <Image
                  src="/linkedin-new.svg"
                  alt="linkedin"
                  height={50}
                  width={50}
         
                />
              </Link>

              <Link
                href="https://www.instagram.com/collegerivalsin/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                  className="ml-1.25rem lg:ml-1.188rem hover:opacity-70%"
              >
                <Image
                  src="/istagram.svg"
                  alt="YouTube"
                  height={50}
                  width={50}
           
                />
              </Link>
             
              <Link
                href="https://www.facebook.com/collegerivalsin"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1.25rem lg:ml-1.188rem hover:opacity-70%"
              >
                <Image
                  src="../facebook-new.svg"
                  alt="facebook"
                  height={50}
                  width={50}
           
                />
              </Link>
            </div>

            <div className="flex gap-9">
              <Image
                src="/demo-img.png"
                alt="footer-logo"
       
                loading="lazy"
                height={108}
                width={108}
              />
                <Image
                src="/demo-img.png"
                alt="footer-logo"
             
                loading="lazy"
                height={108}
                width={108}
              />
                <Image
                src="/demo-img.png"
                alt="footer-logo"
            
                loading="lazy"
                height={108}
                width={108}
              />
            </div>

            <div className="mail-link-container pt-3.25rem lg:pt-0 pb-1.875rem lg:pb-0">
              <Link
                href="mailto:hello@collegerivals.com"
                className="helvetica-light-font text-white text-2xl border-b-white border-b"
              >
                hello@collegerivals.com
              </Link>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};
export default FooterSeason2;
