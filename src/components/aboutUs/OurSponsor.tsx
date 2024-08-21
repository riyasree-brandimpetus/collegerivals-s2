import Image from "next/image";

const OurSponsor = () => {
  return (
    <div className="w-full flex flex-col place-items-center justify-center pt-8 bg-black">
      <div className="max-w-[1440px] w-full h-full flex flex-col justify-center p-12">
        <h2 className="md:text-6xl text-2xl md:mb-24 mb-12 text-center font-extrabold text-white z-10 ppFormula-font uppercase">
          <em>Trusted By</em>
        </h2>

        <div className="flex flex-col justify-center items-center w-full md:gap-20 gap-7 mb-8 text-white z-10">
          <div className="justify-center items-center w-full md:gap-44 gap-7 flex">
            <Image
              width={122}
              height={45}
              src="/Apache.webp"
              alt=""
              className="md:w-auto w-20"
            />
            <Image
              width={100}
              height={48}
              src="/Kreo.webp"
              alt=""
              className="md:w-auto w-20"
            />
          </div>
          <div className="justify-center items-center w-full md:gap-44 gap-7 flex">
            <Image
              width={109}
              height={83}
              src="/sponsor3.svg"
              alt=""
              className="md:w-auto w-20"
            />
            <Image
              width={122}
              height={45}
              src="/sponsor4.svg"
              alt=""
              className="md:w-auto w-20"
            />
            <Image
              width={133}
              height={48}
              src="/sponsor5.svg"
              alt=""
              className="md:w-auto w-20"
            />
          </div>
          <div className="justify-center items-center w-full md:gap-44 gap-7 flex">
            <Image
              width={160}
              height={37}
              src="/sponsor1.svg"
              alt=""
              className="md:w-auto w-20"
            />
            <Image
              width={138}
              height={49}
              src="/sponsor2.svg"
              alt=""
              className="md:w-auto w-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurSponsor;
