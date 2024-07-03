"use client"
import Image from "next/image";
import playbtn from "/assets/hero-movie-btn.svg";
import stripe1 from "/assets/strip1.png";
import stripe2 from "/assets/strip2.png";
import stripe3 from "/assets/strip3.png";
import Link from "next/link";
const HeroSection = () => {

const openvideo = ()=>{
 const url = "https://youtu.be/_rZbggv13po?si=5UVJMt8OU-AqmmWc"
  window.open(url, '_blank');
}

  return (
    <div className="flex flex-col items-center justify-center pt-56 relative ">
     
      <video src="/assets/hero-homepage.mp4" autoPlay={true} controls={false} loop={true} muted={true} className="w-full h-screen object-cover absolute top-0 -z-2"/>
      <div onClick={openvideo} className="px-0.938rem text-xs cursor-pointer text-white rounded-2.063rem py-3 bg-#151515 bg-opacity-40 flex gap-1 backdrop-blur-md helvetica-font font-bold relative ">
        <Image src="/hero-movie-btn.svg" width={9} height={13} alt="playbtn" />
        PLAY AFTERMOVIE
      </div>
      <div className="lg:text-11.563rem md:text-9xls md:mt-1.875rem text-3.438rem max-md:mt-5  max-lg:mb-1.06rem text-#DBFD67 tracking-tight ppFormula-font italic leading-none">
        COLLEGE RIVALS
      </div>
      <div className="text-white -mt-4 md:text-4xl text-lg ppFormula-font italic ">
        IS BACK WITH SEASON 2
      </div>
      <div className="relative mt-7 ">

    <Link href="/sign-up">
      <button 
        className="custom-button-neon m-3 uppercase px-14 py-5 text-1.063rem helvetica-medium-font font-medium text-#DBFD67  rounded-lg backdrop-blur-md"
      >
  Register Now For Free
      </button>
      </Link>
 
</div>

      <div className="w-full flex flex-col items-center city-bg">
        <div className="max-w-[1440px] w-full h-full flex flex-col justify-center slate-400 xl:px-20 xl:py-24 md:p-12 px-6 gap-4 max-md:mt-36 ">
          <div className="flex flex-row flex-wrap justify-between w-full xl:gap-5 md:gap-0 gap-5">
            <div className="outer-border rounded-xl md:w-auto w-full">
              <div className="flex flex-row xl:gap-5 gap-3 bg-[#141619] rounded-xl xl:py-7 xl:px-6 md:p-4 p-6 justify-center place-items-center">
                <Image
                width={74} height={74}
                  className="xl:h-[72px] md:h-[52px] object-contain md:block hidden"
                  src="/assets/strip1.png"
                  alt="strip1"
                />
                <div className="flex flex-row p-1 place-items-baseline gap-2">
                  <p className="xl:text-7xl md:text-5xl text-4xl font-extrabold text-[#E7327C] ppFormula-font">
                    <em>20+</em>
                  </p>
                  <p className="xl:text-2xl text-lg text-white  ml-auto font-bold helvetica-font">
                    <em>CITIES</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="outer-border rounded-xl md:w-auto w-full">
              <div className="flex flex-row xl:gap-5 gap-3 bg-[#141619] rounded-xl xl:py-7 xl:px-6 md:p-4 p-6  justify-center place-items-center">
                <Image
                   width={74} height={74}
                  src="/assets/strip2.png"
                  alt="strip2"
                  className="xl:h-[72px] md:h-[52px] object-contain md:block hidden"
                />
                <div className="flex flex-row p-1 place-items-baseline gap-2">
                  <p className="xl:text-7xl md:text-5xl text-4xl font-extrabold text-[#E7327C] ppFormula-font">
                    <em>50+</em>
                  </p>
                  <p className="xl:text-2xl text-lg text-white  ml-auto font-bold helvetica-font">
                    <em>COLLEGES</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="outer-border rounded-xl md:w-auto w-full">
              <div className="flex flex-row xl:gap-5 gap-3 bg-[#141619] rounded-xl xl:py-7 xl:px-6 md:p-4 p-6  justify-center place-items-center">
                <Image
                   width={74} height={74}
                  src="/assets/strip3.png"
                  alt="strip2"
                  className="xl:h-[72px] md:h-[52px] object-contain md:block hidden"
                />
                <div className="flex flex-row p-1 place-items-baseline gap-2">
                  <p className="xl:text-7xl md:text-5xl text-4xl font-extrabold text-[#E7327C] ppFormula-font">
                    <em>50L</em>
                  </p>
                  <p className="xl:text-2xl text-lg text-white  ml-auto font-bold helvetica-font">
                    <em>PRIZE POOL</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
