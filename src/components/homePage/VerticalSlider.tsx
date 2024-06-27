import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
interface VerticalSliderProps {
  slides: string[];
}

function VerticalSlider({ slides }: VerticalSliderProps) {
  const settingsVertical = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 800,
    pauseOnHover : false,
  };

  return (
    <div className="vertical-slider bg-white rounded-xl p-px">
      <Slider {...settingsVertical}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-container">
            <Image
            width={400}
            height={400}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="slide-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default VerticalSlider;