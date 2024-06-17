"use client"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from "react";
import { Highlight } from "@/types/homepage/home";
import data from "../../data/HighlightsData.json"
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
        centerPadding: '40px',
        afterChange: handleAfterChange,
        arrows:false,
     
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    centerPadding: '-40px',
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
                    centerPadding: '80px',
                }
            }
        ],

      };


    return(

    <div className="w-full bg-black flex justify-center">
    <div className="max-w-[1440px] w-full h-full relative md:py-12 py-4 justify-center ">
        <img src="../../assets/high-pink.svg" alt="" className="absolute top-0 right-0 -z-1 md:w-auto w-24"/>
        <img src="../../assets/high-yellow.svg" alt="" className="absolute left-0 bottom-0 -z-1 md:w-auto w-24"/>
        <div className=" md:px-12 px-4 flex flex-col text-3xl w-full font-semibold p-6 place-items-center justify-center md:mb-28 mb-10">
            <h2 className="md:text-6xl text-2xl mb-2 text-center font-medium text-white italic ppFormula-font tracking-wide ">
                HIGHLIGHTS
            </h2>
            <div className="md:p-12 p-4 bg-year w-4/5 relative flex justify-center">
                <p className="xl:w-4/5 w-full text-white text-center md:text-2xl text-lg md:font-normal font-light helvetica-font">Get ready to experience the ultimate college esports clash at <span className="text-[#DBFD67] font-bold helvetica-font">College Rivals 2024</span>! Join us for intense gaming battles, electrifying live performances, and unforgettable moments of triumph.</p>
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
        <img src={slide.src} alt="highlight" className="mb-4 object-contain rounded-xl" />
    </div>
    ))
}
            </Slider>
        </div>

        <div className="hidden md:flex md:flex-row md:gap-4 justify-center">
            <button 
               onClick={() => goToSlide(activeSlideIndex - 1)}
            id="desktop-prev"><img src="../../assets/left-arrow.svg" className="w-full"/></button>
            <button 
               onClick={() => goToSlide(activeSlideIndex + 1)}
            id="desktop-next"><img src="../../assets/right-arrow.svg" className="w-full"/></button>
        </div>

    </div>
</div>
    )
}

export default Highlights;