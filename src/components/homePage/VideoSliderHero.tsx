"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

const VideoSlider = () => {
  // const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // const sliderRef = useRef<Slider | null>(null);

  // const handleAfterChange = (currentSlideIndex: any) => {
  //   setActiveSlideIndex(currentSlideIndex);
  // };

  // const goToSlide = (index: any) => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickGoTo(index);
  //   }
  // };

  const settings = {
    autoplay: true,
    autoplaySpeed: 4800,
    cssEase: 'linear',
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // afterChange: handleAfterChange,
  };
  return (
    <div className="home-slider relative pt-8 lg:pt-16 w-full h-auto">
      <Slider {...settings} className="flex w-full h-auto">
        <Box className="h-auto cursor-pointer rounded-2xl w-full relative z-0 overflow-hidden">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtu.be/MxvjvUp6H2Y?si=6uCxjoWM-0Jv_hEJ"
            className="w-full relative z-0"
          >
            <video
              src="./anthem-video.mp4"
              className="h-auto w-full relative z-0"
              autoPlay
              loop
              muted
              // onClick={() =>
              //   handleVideoClick("https://www.youtube.com/shorts/CEo1C9tyrCY")
              // }
            />
            <Box
              className="helvetica-font text-xs h-16 w-16 lg:h-20 lg:w-20 flex justify-center
         items-center top-[31%] left-[40%] md:top-[45%] md:left-[45.35%] lg:top-[45%] lg:left-[47%] rounded-50% bg-neon absolute uppercase cursor-pointer hover:drop-shadow-2xl"
              // onClick={() =>
              //   handleVideoClick("https://www.youtube.com/shorts/CEo1C9tyrCY")
              // }
            >
              Play
            </Box>
          </Link>
        </Box>
        <Box className="h-auto cursor-pointer rounded-2xl w-full relative z-0 overflow-hidden">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtu.be/LQ7eNs9esS0?si=kI5Wn7duySoNGwjZ"
            className="w-full relative z-0"
          >
            <video
              src="./hero-video.mp4"
              className="h-auto w-full relative z-0"
              autoPlay
              loop
              muted
              // onClick={() =>
              //   handleVideoClick("https://www.youtube.com/shorts/hocLQaUXpC4")
              // }
            />
            <Box
              className="helvetica-font text-xs h-16 w-16 lg:h-20 lg:w-20 flex justify-center
         items-center top-[31%] left-[40%] md:top-[45%] md:left-[45.35%] lg:top-[45%] lg:left-[47%] rounded-50% bg-neon absolute uppercase cursor-pointer hover:drop-shadow-2xl"
              // onClick={() =>
              //   handleVideoClick("https://www.youtube.com/shorts/hocLQaUXpC4")
              // }
            >
              Play
            </Box>
          </Link>
        </Box>
      </Slider>
      {/* <button
        onClick={() => goToSlide(activeSlideIndex - 1)}
        className={`z-10 left-button absolute right-auto left-[9%] sm:left-[5%] bottom-[3%] md:bottom-auto
           md:left-[30px] md:top-[52%] ${
             activeSlideIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
           } hidden md:block`}
      >
        <Image
          src="hero-slider-left-btn.svg"
          alt="left-arrow"
          className="w-auto h-auto"
        />
      </button>
      <button
        onClick={() => goToSlide(activeSlideIndex + 1)}
        className={`z-10 right-button absolute right-auto left-28% sm:left-16% 
          bottom-[3%] md:bottom-auto md:top-[52%] md:right-[30px] md:left-auto 
          ${
            activeSlideIndex === 1 ? "opacity-40 cursor-not-allowed" : ""
          } hidden md:block`}
      >
        <Image
          src="hero-slider-right-btn.svg"
          alt="right-arrow"
          className="h-auto w-auto"
        />
      </button> */}
    </div>
  );
};

export default VideoSlider;
