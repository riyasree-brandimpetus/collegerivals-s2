"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CitySlides } from "@/types/homepage/home";
import CityData from "../../data/CityTicker.json"
import Image from "next/image";
const CityTicker = () => {

    const Cityslides: CitySlides[] = CityData;

  const slidesettings = {

infinite:true,
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 8,
    autoplaySpeed: 0,
    pauseOnHover:false,
    speed: 1500,
    cssEase: "linear",
    arrows: false,
    draggable: false,

    swipe: false,
    responsive: [
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          speed: 4000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 5000,
        },
      },
    ],
  };

  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-black">
      <div className="max-w-[1440px] w-full h-full flex flex-col justify-center slate-400 md:py-24 py-9 max-md:mt-7 gap-4">
        <h2 className="md:text-6xl text-2xl md:mb-11 mb-4 text-center font-medium text-white ppFormula-font">
          <em>COMING TO A CITY NEAR YOU</em>
        </h2>
        <div>
          <Slider className="city-ticker" {...slidesettings}>

{
    Cityslides.map((slides,index)=>(
        <div key={index} className="md:pl-0 pl-4 w-full">
        <div className=" flex flex-col w-full items-center justify-center">
       
          <Image width={109} height={109}
            src={slides.Imgsrc}
            alt=""
            className="md:mb-6 mb-4 "
          />
          <p className="md:text-xl w-full text-xs text-center text-white font-extrabold">
            <em>{slides.name}</em>
          </p>
         
        </div>
      </div>

    ))
}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CityTicker;
