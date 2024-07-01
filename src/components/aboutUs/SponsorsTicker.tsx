"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flex, Text, Image } from "@chakra-ui/react";

const SponsorsTicker = (props: any) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  {
    props.direction === "reverse" && (settings.slidesToScroll = -1);
  }
  return (
    <Slider {...settings} className="about-us-slider">
      <Flex>
        <Flex
          alignItems="center"
          width="auto"
          height={{ lg: "4.688rem", base: "1.75rem" }}
          justifyContent="center"
        >
          <Image
            src="./sony.svg"
            alt="sony"
            height={{ base: "0.7rem", lg: "auto" }}
          />
        </Flex>
      </Flex>
      <Flex>
        <Flex
          alignItems="center"
          width="auto"
          height={{ lg: "4.688rem", base: "1.75rem" }}
          justifyContent="center"
        >
          <Image
            src="./xbox.webp"
            alt="xbox"
            height={{ lg: "4.688rem", base: "1.75rem" }}
            objectFit="cover"
            width="auto"
          />
        </Flex>
      </Flex>
      <Flex>
        <Flex
          alignItems="center"
          width="auto"
          height={{ lg: "4.688rem", base: "1.75rem" }}
          justifyContent="center"
        >
          <Image
            src="./microsoft.svg"
            alt="microsoft"
            height={{ lg: "4.688rem", base: "1.75rem" }}
            objectFit="cover"
            width="auto"
            loading="lazy"
          />
        </Flex>
      </Flex>
      <Flex>
        <Flex
          alignItems="center"
          width="auto"
          height={{ lg: "4.688rem", base: "1.75rem" }}
          justifyContent="center"
        >
          <Image
            src="./cred.webp"
            alt="cred"
            height={{ lg: "3.75rem", base: "1.75rem" }}
            objectFit="cover"
            width="auto"
          />
        </Flex>
      </Flex>
      <Flex>
        <Flex
          alignItems="center"
          width="auto"
          height={{ lg: "4.688rem", base: "1.75rem" }}
          justifyContent="center"
        >
          <Image
            src="./sony.svg"
            alt="sony"
            height={{ base: "0.7rem", lg: "auto" }}
          />
        </Flex>
      </Flex>
      <Flex>
        <Flex
          alignItems="center"
          width="auto"
          height={{ lg: "4.688rem", base: "1.75rem" }}
          justifyContent="center"
        >
          <Image
            src="./xbox.webp"
            alt="xbox"
            height={{ lg: "4.688rem", base: "1.75rem" }}
            objectFit="cover"
            width="auto"
          />
        </Flex>
      </Flex>
      <Flex>
        <Flex
          alignItems="center"
          width="auto"
          height={{ lg: "4.688rem", base: "1.75rem" }}
          justifyContent="center"
        >
          <Image
            src="./microsoft.svg"
            alt="microsoft"
            height={{ lg: "4.688rem", base: "1.75rem" }}
            objectFit="cover"
            width="auto"
            loading="lazy"
          />
        </Flex>
      </Flex>
      <Flex>
        <Flex
          alignItems="center"
          width="auto"
          height={{ lg: "4.688rem", base: "1.75rem" }}
          justifyContent="center"
        >
          <Image
            src="./cred.webp"
            alt="cred"
            height={{ lg: "3.75rem", base: "1.75rem" }}
            objectFit="cover"
            width="auto"
          />
        </Flex>
      </Flex>
    </Slider>
  );
};

export default SponsorsTicker;
