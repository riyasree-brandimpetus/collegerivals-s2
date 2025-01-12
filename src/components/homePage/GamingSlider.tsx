"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { GamingSlides } from "@/types/homepage/home";
import data from "../../data/GamingSlider.json";
import Link from "next/link";

const GamingSlider = () => {

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
      setHoveredId(id);
  };

  const handleMouseLeave = () => {
      setHoveredId(null);
  };


  const gaming: GamingSlides[] = data;



  return (
    <div className="pt-16 md:pt-0 bg-black w-full">
    <div className="bg-black    ">
   
    <Image src="/pink-gaming-slider-bg-2.svg" alt="pink-bg" className="w-full  lg:-mb-7 -mb-3   bg-black " width="1440" height={200} />
   
      <div className="w-full   flex justify-center bg-#E7327C rounded-xl">

      
        <div className=" max-w-[1440px] w-full h-full rounded-xl md:p-12  max-md:pb-6 flex justify-center ">
          <div className=" w-full justify-center items-center">
            <div className="flex flex-row gap-4 text-3xl w-full font-semibold pt-9 md:pt-24 pl-6 pr-6 place-items-center justify-center md:mb-28 mb-10">
              <div className="md:p-20 p-8 relative flex justify-center">
                <p className="lg:w-3/5 w-full text-white text-center md:text-2xl text-lg md:font-normal font-light helvetica-light-font">
               
             
                   <span className="text-[#DBFD67] font-bold helvetica-font">
                   #RivalryReloaded
                  </span>
                  <br></br>
                  Be the Next Esports Star with College Rivals!
                  Register Now for free. Don't miss your chance to rise to the top – your journey starts here!
                </p>
                <Image
                  width={24}
                  height={24}
                  src="../../../assets/bl.svg"
                  alt="bl"
                  className="absolute bottom-0 left-0"
                />
                <Image
                  width={24}
                  height={24}
                  src="../../../assets/br.svg"
                  alt=""
                  className="absolute bottom-0 right-0"
                />
                <Image
                  width={24}
                  height={24}
                  src="../../../assets/tl.svg"
                  alt=""
                  className="absolute top-0 left-0"
                />
                <Image
                  width={24}
                  height={24}
                  src="../../../assets/tr.svg"
                  alt=""
                  className="absolute top-0 right-0"
                />
              </div>
            </div>

            <div className="flex relative z-10 max-md:overflow-scroll ">
            
                {gaming.map((slides, index) => (
                  <div key={index} className=" pl-2 xl:p-6 max-md:w-80% relative max-md:shrink-0">
               <Link href="/esports">
                
                    <div className="w-full flex justify-left p-8">
                      <p  className={`md:text-xl text-base font-bold absolute z-50 bottom-[10%] target-heading ${hoveredId === slides.id ? 'hovered' : ''}`}>
                        {slides.name}
                      </p>
                    </div>
                    <div
                       onMouseEnter={() => handleMouseEnter(slides.id)}
                       onMouseLeave={handleMouseLeave}
                    
                    className="hover:border-#DBFD67 border border-#E7327C relative rounded-2xl cursor-pointer gamingcard">
                          <Button className=" helvetica-font rounded-full text-xs lg:text-sm font-bold bg-neon absolute  right-[5%]  top-[5%]">
                      {slides.Device}
                    </Button>
                    <Image 
                      width={388}
                      height={479}
                      src={slides.Imgsrc}
                      alt="game-slider"
                      className="object-contain max-md:w-full rounded-2xl relative -z-20"
                    />
                    </div>
                    </Link>
              
                  </div>
                ))}
          
            </div>

           
          </div>
        </div>
      </div>
    
    </div>
    </div>
  );
};
export default GamingSlider;
