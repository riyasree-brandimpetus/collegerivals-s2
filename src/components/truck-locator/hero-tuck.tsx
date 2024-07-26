import dynamic from 'next/dynamic';

const LottieAnimation = dynamic(() => import('./lottie-animation'), { ssr: false });

const Trackhero = () => {
  return (
    <div id="truck-locator" className="flex items-center justify-center w-full md:pt-44 pt-28 bg-black pb-16 md:pb-28">
      <div className="w-full flex flex-col items-center justify-center max-w-[1440]">
        <LottieAnimation />
      </div>
    </div>
  );
};

export default Trackhero;