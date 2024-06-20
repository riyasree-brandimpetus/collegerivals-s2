import Image from "next/image";
import EsportsNavbar from "./EsportsNavbar";


const Esports = () => {
  return (
    <div className="w-full flex flex-col place-items-center justify-center bg-black">
         <EsportsNavbar/>
      <div className="max-w-[1440px] w-full h-full mt-12 flex flex-col justify-center items-center slate-400 lg:p-24 p-6 gap-4 ">
        <div>
        <select className="w-64 mb-14 p-4 border border-#DBFD67 bg-black text-white rounded-lg helvetica-medium-font text-lg" name="cars" id="cars">
  <option value="volvo">BGMI</option>
  <option value="saab">VALORANT</option>
  <option value="mercedes">CSGO</option>
</select>
        </div>
       
  
        <div className="flex md:flex-row flex-col xl:justify-between justify-center w-full gap-5 mb-8 text-white">
       
          <div className="flex flex-col md:py-11 md:px-24 p-7 justify-center place-items-center bg-[#131313] md:w-1/2 w-full">
            <h3 className="font-extrabold md:text-6xl text-2xl mb-6">
              <em>ONLINE</em>
            </h3>
            <p className="md:text-lg text-sm font-extrabold mb-8 ppFormula-font italic text-#8D8D8D">
              <em>MONTHLY QUALIFIERS</em>
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="px-8 py-5 bg-[#3B3B3B] text-[#666666] text-sm flex items-center justify-center rounded-lg">
                <p>AUG</p>
              </div>
              <div className="px-8 bg-[#282828] flex flex-col items-center justify-center rounded-lg">
                <p className="text-[#D1FF45] text-sm">SEP</p>
                <div className="text-[#E7327C] bg-[#2D2D2F] rounded-xl mt-1 py-1 px-3 flex flex-row gap-1">
                  <Image
                    width={2}
                    height={2}
                    src="/assets/live-dot.svg"
                    alt=""
                  />
                  <p className="text-xs">LIVE</p>
                </div>
              </div>
              <div className="px-8 py-5 bg-[#282828] text-white text-sm flex items-center justify-center rounded-lg">
                <p>OCT</p>
              </div>
              <div className="px-8 py-5 bg-[#282828] text-white text-sm flex items-center justify-center rounded-lg">
                <p>NOV</p>
              </div>
              <div className="px-8 py-5 bg-[#282828] text-white text-sm flex items-center justify-center rounded-lg">
                <p>DEC</p>
              </div>
              <div className="px-8 py-5 bg-[#282828] text-white text-sm flex items-center justify-center rounded-lg">
                <p>JAN</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:py-11 md:px-24 p-7 justify-center place-items-center bg-[#131313] md:w-1/2 w-full">
            <h3 className="font-extrabold md:text-6xl text-2xl mb-6">
              <em>OFFLINE</em>
            </h3>
            <p className="md:text-lg text-sm font-extrabold mb-8 md:block hidden  ppFormula-font italic text-#8D8D8D">
              <em>COLLEGE PLAYOFFS</em>
            </p>
            <div className="md:flex hidden justify-center place-items-center relative rounded-xl w-full">
              <Image
                width={335}
                height={134}
                src="/assets/offline-img.png"
                alt=""
                className="w-full"
              />
              <p className="absolute text-3xl font-extrabold">
                <em>50 COLLEGES</em>
              </p>
            </div>
            <div className="md:hidden flex flex-row bg-[#141619] rounded-xl w-full p-6 justify-center place-items-baseline">
              <p className="text-8xl font-extrabold text-[#E7327C]">
                <em>50</em>
              </p>
              <p className="text-2xl -ml-14 font-bold">
                <em>COLLEGES</em>
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col xl:justify-between justify-center w-full gap-5 mb-8 text-white">
          <div className="flex flex-col py-11 px-8 justify-center items-center md:w-1/2">
            <div className="flex justify-center -space-x-3 mb-4">
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={34}
                  height={34}
                  src="/assets/avtar1.svg"
                  alt="Player 1"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={34}
                  height={34}
                  src="/assets/avtar2.svg"
                  alt="Player 2"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={34}
                  height={34}
                  src="/assets/avtar3.svg"
                  alt="Player 3"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={34}
                  height={34}
                  src="/assets/avtar1.svg"
                  alt="Player 4"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={34}
                  height={34}
                  src="/assets/avtar1.svg"
                  alt="Player 5"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white">
                  +59
                </div>
              </div>
            </div>
            <h3 className="font-extrabold md:text-3xl text-xl mb-6 text-[#DBFD67]">
              64 PLAYERS FROM
            </h3>
            <p className="text-base md:mb-12 mb-8 ">
              <em>MONTHLY QUALIFIERS</em>
            </p>
         
            <div className=" bg-[#DBFD67] md:text-3xl text-xl font-extrabold rounded-lg text-[#333132] md:px-24 px-9 md:py-9 py-6 relative  ppFormula-font italic ">
              <em>MONTHLY FINALS</em>
              <Image
                width={428}
                height={102}
                src="/assets/btn-design.svg"
                alt=""
                className="absolute bottom-0 left-0 z-1"
              />
            </div>
    
          </div>

          <div className="flex flex-col py-11 px-8 justify-center place-items-center md:w-1/2">
            <div className="flex justify-center -space-x-3 mb-4">
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar1.svg"
                  alt="Player 1"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar2.svg"
                  alt="Player 2"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar3.svg"
                  alt="Player 3"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar1.svg"
                  alt="Player 4"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar1.svg"
                  alt="Player 5"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar1.svg"
                  alt="Player 5"
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="font-extrabold md:text-3xl text-xl mb-6 text-[#DBFD67]">
              6 PLAYERS FROM
            </h3>
            <p className="text-base md:mb-12 mb-8">
              <em>MONTHLY QUALIFIERS</em>
            </p>
            <div className=" bg-[#DBFD67] md:text-3xl text-xl font-extrabold rounded-lg text-[#333132] md:px-24 px-9 md:py-9 py-6 relative  ppFormula-font italic ">
              <em>COLLEGE PLAYOFFS</em>
              <Image
                width={428}
                height={102}
                src="/assets/btn-design.svg"
                alt=""
                className="absolute bottom-0 left-0 z-1"
              />
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col xl:justify-between justify-center w-full gap-5 mb-8 text-white">
          <div className="flex flex-col py-11 px-8 justify-center place-items-center md:w-1/2">
            <div className="flex justify-center -space-x-3 mb-4">
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar1.svg"
                  alt="Player 1"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar2.svg"
                  alt="Player 2"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar3.svg"
                  alt="Player 3"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar1.svg"
                  alt="Player 4"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar1.svg"
                  alt="Player 5"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white">
                  +43
                </div>
              </div>
            </div>
            <h3 className="font-extrabold md:text-3xl text-xl mb-6 text-[#DBFD67]">
              48 PLAYERS FROM
            </h3>
            <p className="text-base md:mb-12 mb-8">
              <em>8 FROM EACH MONTHLY FINALS</em>
            </p>
          </div>

          <div className="flex flex-col py-11 px-8 justify-center place-items-center md:w-1/2">
            <div className="flex justify-center -space-x-3 mb-4">
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar1.svg"
                  alt="Player 1"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar2.svg"
                  alt="Player 2"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar3.svg"
                  alt="Player 3"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar1.svg"
                  alt="Player 4"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <Image
                  width={46}
                  height={46}
                  src="/assets/avtar1.svg"
                  alt="Player 5"
                  className="rounded-full"
                />
              </div>
              <div className="rounded-full p-1 bg-black">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white">
                  +11
                </div>
              </div>
            </div>
            <h3 className="font-extrabold md:text-3xl text-xl mb-6 text-[#DBFD67]">
              16 PLAYERS FROM
            </h3>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-center w-full gap-5 text-white">
          <div className="w-fit bg-[#18191A] md:text-3xl text-xl font-extrabold rounded-2xl text-[#DBFD67] md:px-12 px-6 md:py-6 py-3">
            <div className="w-full relative px-3 py-6 md:px-12 md:py-6  ppFormula-font italic ">
              <em>LEAGUE STAGE</em>
              <Image
                width={46}
                height={46}
                src="/assets/btn-star.svg"
                alt=""
                className="absolute top-0 left-0 z-1"
              />
              <Image
                width={46}
                height={46}
                src="/assets/btn-star.svg"
                alt=""
                className="absolute bottom-0 right-0 z-1"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center place-items-center w-full gap-5 md:px-12 px-6 md:py-9 py-9 text-white relative">
          <Image
            width={1208}
            height={144}
            src="/assets/btn-bg.png"
            alt=""
            className="w-full"
          />

          <div className="absolute flex flex-col justify-center place-items-center">
            <Image
              width={142}
              height={18}
              src="/assets/logo.svg"
              alt=""
              className="md:w-auto w-1/3"
            />
            <p className="md:text-5xl text-xl font-extrabold text-[#DBFD67]">
              <em>GRAND FINALE</em>
            </p>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Esports;
