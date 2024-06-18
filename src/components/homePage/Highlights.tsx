"use client"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from "react";
import { Highlight } from "@/types/homepage/home";
import data from "../../data/HighlightsData.json"
import season from "../../assets/2023season.png";
import Image from "next/image";

const Highlights = () =>{
    const highlights: Highlight[] = data;

 

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
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        afterChange: handleAfterChange,
        arrows:false,
     
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    centerPadding: '0px',
                    variableWidth: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: true,
                    centerPadding: '60px',
                }
            }
        ],

      };


    return(

    <div className="w-full bg-black flex justify-center">
    <div className="max-w-[1440px] w-full h-full relative md:py-12 py-4 justify-center ">
        <Image width={315} height={762} src="/assets/high-pink.svg" alt="" className="absolute top-0 right-0 z-1 md:w-auto w-24"/>
        <Image width={315} height={762} src="/assets/high-yellow.svg" alt="" className="absolute left-0 bottom-0 z-1 md:w-auto w-24"/>
        <div className=" relative md:px-12 px-4 flex flex-col text-3xl w-full font-semibold p-6 place-items-center justify-center md:mb-28 mb-10">
        <Image className="max-md:hidden absolute -top-20%" src={season} width={737} height={335} alt=""/>
            <h2 className="md:text-6xl text-2xl mb-2 text-center font-medium text-white italic ppFormula-font tracking-wide ">
                HIGHLIGHTS
            </h2>
            <div className=" p-4 md:w-50.5% fle flex-col justify-center">
       
                <p className=" w-full text-white text-center md:text-2xl text-lg md:font-normal font-light Montserrat ">Get ready to experience the ultimate college esports clash at <span className="text-[#DBFD67] font-bold ">College Rivals 2024</span>! Join us for intense gaming battles, electrifying live performances, and unforgettable moments of triumph.</p>
            </div>
        </div>

        <div className="product-slider  md:px-12">
            <Slider  
            className="highlights-slides"
            ref={sliderRef}
                 {...slidesettings}>

                    {
    highlights.map((slide,index)=>(
        <div key={index} className="p-8">
        <Image width={570} height={380} src={slide.src} alt="highlight" className="mb-4 object-contain rounded-xl" />
    </div>
    ))
}
            </Slider>
        </div>

        <div className="hidden md:flex md:flex-row md:gap-4 justify-center">
            <button 
               onClick={() => goToSlide(activeSlideIndex - 1)}
            id="desktop-prev"><Image width={62} height={44} alt="" src="../../assets/left-arrow.svg" className="w-full"/></button>
            <button 
               onClick={() => goToSlide(activeSlideIndex + 1)}
            id="desktop-next"><Image width={62} height={44} alt="" src="../../assets/right-arrow.svg" className="w-full"/></button>
        </div>

    </div>
</div>
    )
}

export default Highlights;