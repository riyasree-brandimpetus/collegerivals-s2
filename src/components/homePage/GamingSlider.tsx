"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { Button } from "@chakra-ui/react";
import { GamingSlides } from "@/types/homepage/home";
import data from "../../data/GamingSlider.json";

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
    <div className="pt-16 md:pt-20 bg-black w-full">
    <div className="bg-black relative   ">
   
       <Image src="/pink-gaming-slider-bg.svg" alt="pink-bg" className="w-full absolute  md:-top-20 -top-9 bg-black " width="1440" height={300} />
   
      <div className="w-full  flex justify-center bg-#E7327C rounded-xl">
      
        <div className=" max-w-[1440px] w-full h-full rounded-xl md:p-12  max-md:pb-6 flex justify-center ">
          <div className=" w-full justify-center items-center">
            <div className="flex flex-row gap-4 text-3xl w-full font-semibold md:pt-24 pl-6 pr-6 place-items-center justify-center md:mb-28 mb-10">
              <div className="md:p-20 p-8 relative flex justify-center">
                <p className="lg:w-3/5 w-full text-white text-center md:text-2xl text-lg md:font-normal font-light helvetica-light-font">
                  Get ready to experience the ultimate college esports clash at{" "}
                  <span className="text-[#DBFD67] font-bold helvetica-font">
                    College Rivals 2024
                  </span>
                  ! Join us for intense gaming battles, electrifying live
                  performances, and unforgettable moments of triumph.
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
                  <div key={index} className=" pl-2 md:p-6 max-md:w-80% relative max-md:shrink-0">
               
                    <Button className=" helvetica-font rounded-full text-xs lg:text-sm font-bold bg-neon absolute md:right-[13%] right-[12%] md:top-[20%] top-[18%]">
                      {slides.Device}
                    </Button>
                    <div className="w-full flex justify-left p-8">
                      <p  className={`md:text-xl text-base font-bold absolute z-50 bottom-[10%] target-heading ${hoveredId === slides.id ? 'hovered' : ''}`}>
                        {slides.name}
                      </p>
                    </div>
                    <div
                       onMouseEnter={() => handleMouseEnter(slides.id)}
                       onMouseLeave={handleMouseLeave}
                    
                    className="hover:border-#DBFD67 border border-#E7327C relative rounded-2xl cursor-pointer gamingcard">
                    <Image 
                      width={388}
                      height={479}
                      src={slides.Imgsrc}
                      alt="game-slider"
                      className="object-contain rounded-2xl relative -z-20"
                    />
                    </div>
              
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
