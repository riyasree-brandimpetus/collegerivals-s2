"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

const VideoSlider = () => {
  const scrollRef = useRef(null);
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

  const settings = {
    className: "slider variable-width",
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.4,
        },
      },
    ],
  };

  const [selectedVideo, setSelectedVideo] = useState("./video-one.mp4");
  const [overlay, setOverlay] = useState(false);

  const handleCloseOverlay = () => {
    setOverlay(false);
  };

  const handleVideoClick = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
    setOverlay(true);
  };
  return (
    <div className="video-slider-container relative pt-14 lg:pt-11.188rem px-0 lg:px-20">
      <Slider ref={sliderRef} {...settings} className="flex gap-5 w-full">
        <Box className="lg:w-1/2 h-auto cursor-pointer rounded-2xl w-full relative overflow-hidden">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/shorts/CEo1C9tyrCY"
            className="w-full relative"
          >
            <video
              src="./video-one.mp4"
              className="h-full w-full relative"
              autoPlay
              loop
              muted
              // onClick={() =>
              //   handleVideoClick("https://www.youtube.com/shorts/CEo1C9tyrCY")
              // }
            />
            <Box
              className="helvetica-font text-xs h-16 w-16 lg:h-20 lg:w-20 flex justify-center
         items-center top-27% left-38% lg:top-40% lg:left-46% rounded-50% bg-neon absolute uppercase cursor-pointer hover:drop-shadow-2xl"
              // onClick={() =>
              //   handleVideoClick("https://www.youtube.com/shorts/CEo1C9tyrCY")
              // }
            >
              Play
            </Box>
          </Link>
        </Box>
        <Box className="lg:w-1/2 h-auto cursor-pointer rounded-2xl w-full relative overflow-hidden">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/shorts/hocLQaUXpC4"
            className="w-full relative"
          >
            <video
              src="./video-two.mp4"
              className="h-full w-full relative"
              autoPlay
              loop
              muted
              // onClick={() =>
              //   handleVideoClick("https://www.youtube.com/shorts/hocLQaUXpC4")
              // }
            />
            <Box
              className="helvetica-font text-xs h-16 w-16 lg:h-20 lg:w-20 flex justify-center
         items-center top-27% left-38% lg:top-40% lg:left-46% rounded-50% bg-neon absolute uppercase cursor-pointer hover:drop-shadow-2xl"
              // onClick={() =>
              //   handleVideoClick("https://www.youtube.com/shorts/hocLQaUXpC4")
              // }
            >
              Play
            </Box>
          </Link>
        </Box>
      </Slider>
      <button
        onClick={() => goToSlide(activeSlideIndex - 1)}
        className={`absolute right-auto left-[9%] sm:left-[5%] bottom-[3%] md:bottom-auto md:left-auto md:right-[15%]
           lg:right-[13%] md:top-[18%] ${
             activeSlideIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
           } hidden md:block`}
      >
        <Image
          src="left-arrow.svg"
          alt="left-arrow"
          className="w-auto h-auto"
        />
      </button>
      <button
        onClick={() => goToSlide(activeSlideIndex + 1)}
        className={`absolute right-auto left-28% sm:left-16% 
          bottom-[3%] md:bottom-auto md:top-[18%] md:right-[7%] md:left-auto 
          ${
            activeSlideIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
          } hidden md:block`}
      >
        <Image
          src="right-arrow.svg"
          alt="right-arrow"
          className="h-auto w-auto"
        />
      </button>
      {/* {overlay && (
        <VideoOverlay videoSrc={selectedVideo} onClose={handleCloseOverlay} />
      )} */}
    </div>
  );
};

export default VideoSlider;
