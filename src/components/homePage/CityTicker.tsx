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
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: "linear",
    arrows: false,
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
      <div className="max-w-[1440px] w-full h-full flex flex-col justify-center slate-400 md:py-24 py-6 gap-4">
        <h2 className="md:text-6xl text-2xl mb-11 text-center font-medium text-white ppFormula-font">
          <em>COMING TO A CITY NEAR YOU</em>
        </h2>
        <div>
          <Slider className="city-ticker" {...slidesettings}>

{
    Cityslides.map((slides,index)=>(
        <div key={index} className="md:pl-0 pl-4 ">
        <div className="flex-row items-center">
          <Image width={109} height={109}
            src={slides.Imgsrc}
            alt=""
            className="md:mb-6 mb-4"
          />
          <p className="md:text-xl text-base text-white font-extrabold">
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
