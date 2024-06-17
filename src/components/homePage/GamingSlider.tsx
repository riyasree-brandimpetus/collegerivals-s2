
"use client"
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { Button } from "@chakra-ui/react";
import { GamingSlides } from "@/types/homepage/home";
import data from "../../data/GamingSlider.json"

const GamingSlider = () => {

    const gaming: GamingSlides[] = data;

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const sliderRef = useRef<Slider | null>(null);

  const handleAfterChange = (currentSlideIndex: any) => {
    setActiveSlideIndex(currentSlideIndex);
  };

  const goToSlide = (index: any) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  const slidesettings = {
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    afterChange: handleAfterChange,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <div className="bg-black">
      <div className="w-full  flex justify-center bg-#E7327C rounded-xl">
        <div className=" max-w-[1440px] w-full h-full rounded-xl md:p-12 p-2 flex justify-center ">
          <div className=" w-full justify-center items-center">
            <div className="flex flex-row gap-4 text-3xl w-full font-semibold pt-24 pl-6 pr-6 place-items-center justify-center md:mb-28 mb-10">
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

            <div className="product-slider pr-4">
              <Slider ref={sliderRef} {...slidesettings}>

  
{
    gaming.map((slides,index)=>(

        <div key={index} className=" pl-2 md:p-6 relative">
        <Button className=" helvetica-font rounded-full text-xs lg:text-sm font-bold bg-neon absolute md:right-[13%] right-[12%] md:top-[20%] top-[18%]">
        {slides.Device}
      </Button>
          <div className="w-full flex justify-left p-8">
            <p className="text-white md:text-xl text-base font-bold absolute bottom-[10%]">
           {slides.name}
            </p>
          </div>
          <Image width={388} height={479}
            src={slides.Imgsrc}

            alt="game-slider"
            className="object-contain rounded-2xl"
          />
        </div>

    ))
}

  
              </Slider>
            </div>

            <div className="hidden md:flex md:flex-row md:gap-4 justify-center">
              <button
                onClick={() => goToSlide(activeSlideIndex - 1)}
                id="desktop-prev"
              >
                <Image alt="" width={62} height={44} src="../../../assets/left-arrow.svg" className="w-full" />
              </button>
              <button
                onClick={() => goToSlide(activeSlideIndex + 1)}
                id="desktop-next"
              >
                <Image  width={62} height={44}  alt="" src="../../../assets/right-arrow.svg" className="w-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GamingSlider;
