import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flex, Text, Image } from "@chakra-ui/react";

const tickerContainer = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    arrows: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div className="homepage-ticker-container w-full lg:py-2.5 overflow-x-hidden">
      <Slider {...settings} className="homepage-ticker">
        <Flex className="ticker-element">
          <Flex className="items-center justify-between ticker-element">
            <Text className="helvetica-font text-0.975rem lg:text-1.375rem px-7 lg:px-9">
              GET READY
            </Text>
            <Image src="./star.svg" alt="star" className="h-auto w-auto" />
          </Flex>
        </Flex>
        <Flex className="ticker-element">
          <Flex className="items-center justify-between ticker-element">
            <Text className="helvetica-font text-0.975rem lg:text-1.375rem px-7 lg:px-9">
              MUMBAI
            </Text>
            <Image src="./star.svg" alt="star" className="h-auto w-auto" />
          </Flex>
        </Flex>
        <Flex className="ticker-element">
          <Flex className="items-center justify-between ticker-element">
            <Text className="helvetica-font text-0.975rem lg:text-1.375rem px-7 lg:px-9">
              PUNE
            </Text>
            <Image src="./star.svg" alt="star" className="h-auto w-auto" />
          </Flex>
        </Flex>
        <Flex className="ticker-element">
          <Flex className="items-center justify-between ticker-element">
            <Text className="helvetica-font text-0.975rem lg:text-1.375rem px-7 lg:px-9">
              DELHI
            </Text>
            <Image src="./star.svg" alt="star" className="h-auto w-auto" />
          </Flex>
        </Flex>
        <Flex className="ticker-element">
          <Flex className="items-center justify-between ticker-element">
            <Text className="helvetica-font text-0.975rem lg:text-1.375rem px-7 lg:px-9">
              BANGALORE
            </Text>
            <Image src="./star.svg" alt="star" className="h-auto w-auto" />
          </Flex>
        </Flex>
        <Flex className="ticker-element">
          <Flex className="items-center justify-between ticker-element">
            <Text className="helvetica-font text-0.975rem lg:text-1.375rem px-7 lg:px-9">
              HYDERABAD
            </Text>
            <Image src="./star.svg" alt="star" className="h-auto w-auto" />
          </Flex>
        </Flex>
        <Flex className="ticker-element">
          <Flex className="items-center justify-between ticker-element">
            <Text className="helvetica-font text-0.975rem lg:text-1.375rem px-7 lg:px-9">
              GET READY
            </Text>
            <Image src="./star.svg" alt="star" className="h-auto w-auto" />
          </Flex>
        </Flex>
        <Flex className="ticker-element">
          <Flex className="items-center justify-between ticker-element">
            <Text className="helvetica-font text-0.975rem lg:text-1.375rem px-7 lg:px-9">
              MUMBAI
            </Text>
            <Image src="./star.svg" alt="star" className="h-auto w-auto" />
          </Flex>
        </Flex>
        <Flex className="ticker-element">
          <Flex className="items-center justify-between ticker-element">
            <Text className="helvetica-font text-0.975rem lg:text-1.375rem px-7 lg:px-9">
              PUNE
            </Text>
            <Image src="./star.svg" alt="star" className="h-auto w-auto" />
          </Flex>
        </Flex>
        <Flex className="ticker-element">
          <Flex className="items-center justify-between ticker-element">
            <Text className="helvetica-font text-0.975rem lg:text-1.375rem px-7 lg:px-9">
              DELHI
            </Text>
            <Image src="./star.svg" alt="star" className="h-auto w-auto" />
          </Flex>
        </Flex>
        <Flex className="ticker-element">
          <Flex className="items-center justify-between ticker-element">
            <Text className="helvetica-font text-0.975rem lg:text-1.375rem px-7 lg:px-9">
              BANGALORE
            </Text>
            <Image src="./star.svg" alt="star" className="h-auto w-auto" />
          </Flex>
        </Flex>
        <Flex className="ticker-element">
          <Flex className="items-center justify-between ticker-element">
            <Text className="helvetica-font text-0.975rem lg:text-1.375rem px-7 lg:px-9">
              HYDERABAD
            </Text>
            <Image src="./star.svg" alt="star" className="h-auto w-auto" />
          </Flex>
        </Flex>
      </Slider>
    </div>
  );
};

export default tickerContainer;
