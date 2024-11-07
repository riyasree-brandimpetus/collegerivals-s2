import Image from "next/image";
import Link from "next/link";

const Rules = () => {
  return (
    <div id="rules" className="w-full flex flex-col items-center bg-black">
      <div className="max-w-[1440px] w-full h-full flex flex-col justify-center slate-400 lg:p-24 p-6 gap-4 ">
        <h2 className="md:text-7xl text-2xl md:mb-24 mb-12 text-center font-medium text-white ppFormula-font">
          <em>RULES</em>
        </h2>

        <div className="flex flex-row flex-wrap justify-center w-full md:gap-8 gap-6 mb-8 text-white">
          <div className="flex flex-row w-full justify-between md:gap-3 gap-1  place-items-center">
            <Image width={141} height={138} src="/fifa-sm.png" alt="" />
            <div className="flex md:flex-row flex-col gap-4 justify-between md:place-items-center place-items-left w-full md:p-7 py-3 pl-3">
              <h3 className="md:text-2xl text-lg font-extrabold">
                <em>FIFA</em>
              </h3>
              <div className="gradient-border h-fit w-fit">
                <Link
                  href="/rules/fifa"
                  className="inner md:px-1.5rem text-base md:py-1.125rem bg-black px-4 py-2.5 font-medium helvetica-medium-font"
                >
                  VIEW RULEBOOK
                </Link>
              </div>
            </div>
          </div>
          <hr className="  w-full border-[#ffffff3d]"></hr>

          <div className="flex flex-row w-full justify-between md:gap-3 gap-1 place-items-center">
            <Image width={141} height={138} src="/assets/rule2.png" alt="" />
            <div className="flex md:flex-row flex-col gap-4 justify-between md:place-items-center place-items-left w-full md:p-7 py-3 pl-3">
              <h3 className="md:text-2xl text-lg font-extrabold">
                <em>BATTLEGROUND MOBILE INDIA</em>
              </h3>
              <div className="gradient-border h-fit w-fit">
                <Link
                  href="/rules/bgmi"
                  className="inner md:px-1.5rem md:py-1.25rem px-4 py-2.5 helvetica-medium-font font-medium bg-black text-base"
                >
                  VIEW RULEBOOK
                </Link>
              </div>
            </div>
          </div>
          <hr className="border-[#ffffff3d] w-full"></hr>

          <div className="flex flex-row w-full justify-between md:gap-3 gap-1 place-items-center">
            <Image width={141} height={138} src="/assets/rule3.png" alt="" />
            <div className="flex md:flex-row flex-col gap-4 justify-between md:place-items-center place-items-left w-full md:p-7 py-3 pl-3">
              <h3 className="md:text-2xl text-lg font-extrabold">
                <em>VALORANT</em>
              </h3>
              <div className="gradient-border h-fit w-fit">
                <Link
                  href="/rules/valorant"
                  className="inner md:px-1.5rem md:py-1.25rem px-4 py-2.5 helvetica-medium-font font-medium bg-black text-base"
                >
                  VIEW RULEBOOK
                </Link>
              </div>
            </div>
          </div>
          <hr className=" border-[#ffffff3d] w-full"></hr>
        </div>
      </div>
    </div>
  );
};
export default Rules;
