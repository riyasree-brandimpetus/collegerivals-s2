"use client"
import Image from "next/image";
import EsportsNavbar from "./EsportsNavbar";

import { useEffect, useRef, useState } from "react";
import { Data, GameData } from "@/types/Esports/esports";


  const Esports: React.FC = () => {



  const [selectedOption, setSelectedOption] = useState<string>('BGMI');
  const [data, setData] = useState<GameData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./Esports.json");
      const json: Data = await res.json();
      console.log(json)
      setData(json[selectedOption]);
    };

    fetchData();
  }, [selectedOption]);



// custom dropdown
  const [selectedItem, setSelectedItem] = useState<string>('BGMI');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectItem = (item: string) => {
setSelectedOption(item);
setSelectedItem(item);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  return (
    <div id="section1" className="w-full flex flex-col place-items-center justify-center bg-black section">
         <EsportsNavbar/>
      <div className="max-w-[1440px] w-full h-full mt-12 flex flex-col justify-center items-center slate-400 lg:p-24 p-6 gap-4 ">
     
        <div>
          <div>
          <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="w-64 mb-14 text-left p-4 border border-#DBFD67 bg-black text-white rounded-lg helvetica-medium-font uppercase text-lg custom-select-arrow"
        onClick={toggleDropdown}
      >
        {selectedItem}
      </button>
      {isOpen && (
        <div className="absolute top-16 w-full text-lg bg-black shadow-lg mt-1 helvetica-medium-font  rounded-md z-10">
          <a
            href="#"
            className="block px-4 py-4 text-white "
            onClick={() => selectItem('BGMI')}
          >
         BGMI
          </a>
          <a
            href="#"
            className="block px-4 py-4 bg-[#131313] text-white "
            onClick={() => selectItem('Valorant')}
          >
           VALORANT
          </a>
          <a
            href="#"
            className="block px-4 py-4 text-white "
            onClick={() => selectItem('FIFA')}
          >
          FIFA
          </a>
        </div>
      )}
    </div>

          </div>
        </div>
     
      
  
        <div className="flex xl:flex-row flex-col xl:justify-between justify-center items-stretch w-full gap-5  text-white">
       <div className="xl:w-1/2 w-full flex flex-col ">
          <div className="flex flex-col md:py-11 md:px-6 p-7 justify-center place-items-center bg-[#131313] ">
            <h3 className="font-extrabold md:text-6xl text-2xl mb-6 ppFormula-font italic ">
              <em>ONLINE</em>
            </h3>
            <p className="md:text-lg text-sm font-extrabold mb-8 ppFormula-font italic text-#8D8D8D">
              <em>MONTHLY QUALIFIERS</em>
            </p>
            <div className="grid  md:grid-cols-6 grid-cols-3  gap-0.438rem">
            <div className="px-8 py-1.375rem bg-[#3B3B3B] text-[#666666] text-sm flex items-center justify-center rounded-lg ppFormula-font italic">
                <p>AUG</p>
              </div>
              <div className="px-8 bg-[#282828] flex flex-col items-center justify-center rounded-lg">
                <p className="text-[#D1FF45] text-sm ppFormula-font italic ">SEP</p>
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
              <div className="px-8 py-1.375rem bg-[#282828] text-white text-sm flex items-center justify-center rounded-lg ppFormula-font italic ">
                <p>OCT</p>
              </div>
              <div className="px-8 py-1.375rem bg-[#282828] text-white text-sm flex items-center justify-center rounded-lg ppFormula-font italic  ">
                <p>NOV</p>
              </div>
              <div className="px-8 py-1.375rem bg-[#282828] text-white text-sm flex items-center justify-center rounded-lg ppFormula-font italic  ">
                <p>DEC</p>
              </div>
              <div className="px-8 py-1.375rem bg-[#282828] text-white text-sm flex items-center justify-center rounded-lg ppFormula-font   italic ">
                <p>JAN</p>
              </div>
            
             
            </div>
            <div className="grid md:grid-cols-6 grid-cols-1 mt-8 gap-1 md:gap-5">
             <p className="text-lg  md:flex hidden py-1.375rem text-#DBFD67 font-bold helvetica-font  uppercase">Top 64</p>
             <p className="text-lg  md:flex hidden   py-1.375rem text-#DBFD67 font-bold helvetica-font  uppercase">Top 64</p>
             <p className="text-lg  md:flex hidden   py-1.375rem text-#DBFD67 font-bold helvetica-font uppercase ">Top 64</p>
             <p className="text-lg  md:flex hidden   py-1.375rem text-#DBFD67 font-bold helvetica-font  uppercase">Top 64</p>
             <p className="text-lg  md:flex hidden  py-1.375rem text-#DBFD67 font-bold helvetica-font  uppercase">Top 64</p>
             <p className="text-lg flex  py-1 md:py-1.375rem text-#DBFD67 font-bold helvetica-font  uppercase">Top 64</p>
             
              </div>
           
            <div className="flex flex-col justify-center items-center">
              <Image src="/esports-arrows1.svg" width={477} height={97} alt="" className="md:flex hidden" />
              <Image src="/esports-arrow-mob.svg" width={23} height={82} alt="" className="md:hidden flex" />

            </div>
            <div className="grid  md:grid-cols-6 grid-cols-3  mt-3 md:mt-9 gap-0.438rem">
              <div className="px-8 py-1.375rem bg-[#3B3B3B] text-[#666666] text-sm flex items-center justify-center rounded-lg ppFormula-font italic">
                <p>AUG</p>
              </div>
              <div className="px-8 bg-[#282828] flex flex-col items-center justify-center rounded-lg">
                <p className="text-[#D1FF45] text-sm ppFormula-font italic ">SEP</p>
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
              <div className="px-8 py-1.375rem bg-[#282828] text-white text-sm flex items-center justify-center rounded-lg ppFormula-font italic ">
                <p>OCT</p>
              </div>
              <div className="px-8 py-1.375rem bg-[#282828] text-white text-sm flex items-center justify-center rounded-lg ppFormula-font italic  ">
                <p>NOV</p>
              </div>
              <div className="px-8 py-1.375rem bg-[#282828] text-white text-sm flex items-center justify-center rounded-lg ppFormula-font italic  ">
                <p>DEC</p>
              </div>
              <div className="px-8 py-1.375rem bg-[#282828] text-white text-sm flex items-center justify-center rounded-lg ppFormula-font   italic ">
                <p>JAN</p>
              </div>
            
             
            </div>

            <div className="flex flex-col pt-12 justify-center items-center w-full">
           
          
         
            <div className=" bg-[#DBFD67] md:text-3xl max-md:w-full flex items-center justify-center text-xl font-extrabold rounded-lg text-[#333132] md:px-24 px-9 md:py-9 py-6 relative  ppFormula-font italic ">
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
          </div>
          <div className="flex flex-col mt md:mt-16 justify-center place-items-center w-full">
            <div className="flex justify-center -space-x-3 mb-4">

            { data && (
            <div className="flex justify-center -space-x-3 md:mb-4 mb-1" >
              {data.Online.monthly_finals_img.map((img,index)=>(
              <div key={index} className="rounded-full p-1 bg-black">
              <Image
                   width={46}
                   height={46}
                  src={img}
                  alt="Player 1"
                  className="rounded-full"
                />
                    </div>
            ))}</div>
          )}
              <div className="rounded-full p-1 bg-black">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white">
                  +43
                </div>
              </div>
            </div>
            <h3 className="font-extrabold md:text-3xl text-xl mb-2 md:mb-6 text-[#DBFD67]">
            { data && (
            <span >{data.Online.monthly_finals}</span>
          )} PLAYERS FROM
            </h3>
            <p className="text-base ">
              <em>8 FROM EACH MONTHLY FINALS</em>
            </p>
          </div>
          <div className="md:hidden flex flex-col">

          <div className="w-full justify-center items-center flex"> <Image src="/esports-illustration1.svg" width={656} height={136} alt="" className="md:flex hidden"/>
          <Image src="/esports-arrow-mob-2.svg" width={20} height={60} alt="" className="md:hidden flex" />
           </div>

<div className="flex flex-row flex-wrap justify-center w-full gap-5 text-white">
  <div className="w-fit bg-[#18191A] md:text-3xl text-xl font-extrabold rounded-2xl text-[#DBFD67] md:px-12 px-6 md:py-6 py-3">
    <div className="w-full relative px-6 py-2  ppFormula-font italic ">
      <em>LEAGUE STAGE</em>
      <Image
        width={20}
        height={20}
        src="/assets/btn-star.svg"
        alt=""
        className="absolute top-0 left-0 z-1"
      />
      <Image
        width={20}
        height={20}
        src="/assets/btn-star.svg"
        alt=""
        className="absolute bottom-0 right-0 z-1"
      />
    </div>
  </div>
</div>
<div className="flex w-full items-center justify-center"><Image src='/esports-illustration2.svg' alt="" width={2} height={104} /></div>

<div className="flex flex-col flex-wrap justify-center place-items-center w-full  gap-5 md:px-12 px-6  text-white relative">

    <Image
    width={327}
    height={103}
    src="/btn-bg-mob-2.png"
    alt=""
    className="w-full "
  />

  <div className="absolute flex flex-col justify-center place-items-center">
    <Image
      width={142}
      height={18}
      src="/assets/logo.svg"
      alt=""
      className="md:w-auto w-1/2"
    />
    <p className="md:text-5xl text-xl font-extrabold text-[#DBFD67]  ppFormula-font italic ">
      <em>GRAND FINALE</em>
    </p>
  </div>
</div>

          </div>

          </div>
<div className="flex flex-col max-md:mt-20 xl:w-1/2 w-full justify-between">
<div>
          <div className="flex flex-col md:py-11 md:px-24 p-7 justify-center place-items-center bg-[#131313]  w-full ppFormula-font italic ">
            <h3 className="font-extrabold md:text-6xl text-2xl mb-6">
              <em>OFFLINE</em>
            </h3>
            <p className="md:text-lg text-sm font-extrabold mb-5 md:block hidden  ppFormula-font italic text-#8D8D8D">
              <em>COLLEGE PLAYOFFS</em>
            </p>
            <div className="md:flex hidden justify-center place-items-center relative rounded-xl w-full">
              <Image
                width={705}
                height={134}
                src="/assets/offline-img.png"
                alt=""
                className="w-90%"
              />
              <p className="absolute text-3xl font-extrabold  ppFormula-font italic ">
                <em>{ data && (
            <span >{data.offline.colleges}</span>
          )} COLLEGES</em>
              </p>
            </div>
            <div className="md:hidden flex flex-row bg-[#141619] rounded-xl w-full p-6 justify-center place-items-baseline">
              <p className="text-8xl font-extrabold text-[#E7327C]  ppFormula-font italic ">
              { data && (
            <span >{data.offline.colleges}</span>
          )}
              </p>
              <p className="text-2xl -ml-14 font-bold  ppFormula-font italic ">
                <em>COLLEGES</em>
              </p>
            </div>
            </div>

            <div className="flex flex-col  px-8 justify-center place-items-center w-full">
            <div className="flex justify-center md:pt-12 pt-7  mb-4">

            { data && (
            <div className="flex justify-center -space-x-3 " >
              {data.offline.monthly_qualifiers_img.map((img,index)=>(
              <div key={index} className="rounded-full p-1 bg-black">
              <Image
                   width={46}
                   height={46}
                  src={img}
                  alt="Player 1"
                  className="rounded-full"
                />
                    </div>
            ))}</div>
          )}
            </div>
            <h3 className="font-extrabold md:text-3xl text-xl mb-4 text-[#DBFD67]">
            { data && (
            <span >{data.offline.monthly_qualifiers}</span>
          )} PLAYERS FROM
            </h3>
            <p className="text-base md:mb-9 mb-8  ">
              <em>MONTHLY QUALIFIERS</em>
            </p>
            <div className=" bg-[#DBFD67] md:text-3xl text-xl font-extrabold rounded-lg text-[#333132] max-md:mb-8 md:px-24 max-md:w-full flex justify-center items-center md:py-9 py-6 relative  ppFormula-font italic ">
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

          <div className="flex flex-col  justify-center place-items-center w-full">
            <div className="flex justify-center -space-x-3 mb-4">
            
              { data && (
            <div className="flex justify-center -space-x-3 mb-4" >
              {data.offline.monthly_finals_img.map((img,index)=>(
              <div key={index} className="rounded-full p-1 bg-black">
              <Image
                   width={46}
                   height={46}
                  src={img}
                  alt="Player 1"
                  className="rounded-full"
                />
                    </div>
            ))}</div>
          )}

               
              <div className="rounded-full p-1 bg-black">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white">
                  +11
                </div>
              </div>
            </div>
            <h3 className="font-extrabold md:text-3xl text-xl md:mb-6 text-[#DBFD67]">
            { data && (
            <span >{data.offline.college_playoffs}</span>
          )}   PLAYERS FROM
            </h3>
          </div>
         
          </div>
        </div>

        <div className="w-full justify-center items-center flex"> <Image src="/esports-illustration1.svg" width={656} height={136} alt="" className="md:flex hidden"/>
          <Image src="/esports-arrow-mob-2.svg" width={20} height={60} alt="" className="md:hidden flex" />
           </div>

        <div className="flex flex-row flex-wrap justify-center w-full gap-5 text-white">
          <div className="w-fit bg-[#18191A] md:text-3xl text-xl font-extrabold rounded-2xl text-[#DBFD67] md:px-12 px-6 md:py-6 py-3">
            <div className="w-full relative px-6 py-2 md:px-12 md:py-6  ppFormula-font italic ">
              <em>LEAGUE STAGE</em>
              <Image
                width={46}
                height={46}
                src="/assets/btn-star.svg"
                alt=""
                className="absolute top-0  left-0 z-1 md:flex hidden"
              />
              <Image
                width={46}
                height={46}
                src="/assets/btn-star.svg"
                alt=""
                className="absolute bottom-0 right-0 z-1 md:flex hidden"
              />

<Image
        width={20}
        height={20}
        src="/assets/btn-star.svg"
        alt=""
        className="absolute top-0 left-0 z-1 md:hidden flex"
      />
      <Image
        width={20}
        height={20}
        src="/assets/btn-star.svg"
        alt=""
        className="absolute bottom-0 right-0 z-1 md:hidden flex"
      />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center"><Image src='/esports-illustration2.svg' alt="" width={2} height={104} /></div>

        <div className="flex flex-col flex-wrap justify-center place-items-center w-full gap-5 md:px-12 px-6  text-white relative">
          <Image
            width={1208}
            height={144}
            src="/assets/btn-bg.png"
            alt=""
            className="w-full md:flex hidden"
          />

<Image
    width={327}
    height={103}
    src="/btn-bg-mob-2.png"
    alt=""
    className="w-full md:hidden flex "
  />


          <div className="absolute flex flex-col justify-center place-items-center">
            <Image
              width={142}
              height={18}
              src="/assets/logo.svg"
              alt=""
              className="md:w-auto w-1/2 "
            />
            <p className="md:text-5xl text-xl font-extrabold text-[#DBFD67]  ppFormula-font italic ">
              <em>GRAND FINALE</em>
            </p>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Esports;
