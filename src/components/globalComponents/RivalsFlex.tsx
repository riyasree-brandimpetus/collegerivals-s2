import React, { useEffect, useRef } from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";

const RivalsFlex = () => {
  // using use ref to manipulate the virtual dom to do the hover effect on images when the hover is on the read button of a respective class
  const imageRefs = useRef<HTMLElement[]>([]);
  const bgImageRefs = useRef<HTMLElement[]>([]);
  const buttonRefs = useRef<HTMLElement[]>([]);
  const bgButtonRefs = useRef<HTMLElement[]>([]);
  useEffect(() => {
    imageRefs.current = Array.from(
      document.querySelectorAll(".news-card-image")
    );

    bgImageRefs.current = Array.from(
      document.querySelectorAll(".news-card-bg-image")
    );
    buttonRefs.current = Array.from(
      document.querySelectorAll(".news-card-button")
    );
    bgButtonRefs.current = Array.from(
      document.querySelectorAll(".news-card-bg-button")
    );

    buttonRefs.current.forEach((button, index) => {
      button.addEventListener("mouseenter", () => {
        if (imageRefs.current[index]) {
          imageRefs.current[index].style.transform = "scale(1.1)";
          imageRefs.current[index].style.transition =
            "transform 0.75s ease-in-out";
        }
      });

      button.addEventListener("mouseleave", () => {
        if (imageRefs.current[index]) {
          imageRefs.current[index].style.transform = "scale(1)";
        }
      });
    });

    bgButtonRefs.current.forEach((button, index) => {
      button.addEventListener("mouseenter", () => {
        if (bgImageRefs.current[index]) {
          bgImageRefs.current[index].style.backgroundSize = "135%";
        }
      });

      button.addEventListener("mouseleave", () => {
        if (bgImageRefs.current[index]) {
          bgImageRefs.current[index].style.backgroundSize = "125%";
        }
      });
    });

    return () => {
      buttonRefs.current.forEach((button, index) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });

      bgButtonRefs.current.forEach((button, index) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);
  return (
    <Flex className="rivals-flex w-full flex flex-col xl:flex-row">
      <Box
        className="overflow-hidden rounded-0.875rem lg:rounded-1.5rem w-full xl:w-55% h-25vh sm:h-45vh
             lg:h-57vh max-h-30rem"
      >
        <Flex
          className="w-full h-full counterstrike items-end px-0.625rem pb-0.625rem lg:px-1.5rem lg:pb-1.5rem news-card-bg-image bg-center"
          backgroundImage="url('/news1.webp')"
          backgroundSize={{ base: "cover", xl: "125%" }}
        >
          <Flex
            className="bg-white w-full flex items-center lg:items-end
             justify-between rounded-0.875rem lg:rounded-1.25rem p-0.625rem
              lg:pt-1.37rem lg:pb-1.56rem lg:px-1.94rem"
          >
            <Text className="helvetica-font text-sm lg:text-xl w-80%">
              Exclusive Insights Into Ampverse & DMI Finance’s Game-Changing
              Esports Venture.{" "}
            </Text>
            <a
              className="flex helvetica-light-font text-xs lg:text-0.937rem hover:opacity-80% hover:underline news-card-bg-button"
              href="https://www.marketinginasia.com/exclusive-insights-into-ampverse-dmi-finances-game-changing-esports-venture/"
              target="_blank"
              rel="noopener noreferrer"
            >
              READ{" "}
              <Image
                src="./upright-arrow.svg"
                className="h-auto w-auto"
                alt=""
              ></Image>
            </a>
          </Flex>
        </Flex>
      </Box>
      <Flex className="pubg-val w-full xl:w-45% flex-col h-full lg:h-57vh xl:pl-6 items-stretch max-h-30rem">
        <Flex
          className="pubg-container w-full h-48% bg-neon p-0.625rem
             sm:py-2rem sm:px-1.6rem rounded-xl lg:rounded-1.25rem mb-3 mt-3 xl:mt-0"
        >
          <Box className="pubg-image-container rounded-0.875rem overflow-hidden h-auto w-30% sm:w-15% lg:w-30%">
            <Image
              src="./news2.webp"
              alt="pubg"
              className="w-full h-full object-cover news-card-image"
            />
          </Box>
          <Flex className="pubg-text-container flex-col pl-6 w-[70%] sm:w-[85%] lg:w-[70%]">
            <Text className="helvetica-font text-sm lg:text-xl w-full pb-5">
              College Rivals: Ampverse and DMI Finance Announce New Collegiate
              Esports IP, All You Need to Know
            </Text>
            <a
              className="news-card-button flex helvetica-light-font text-xs lg:text-0.937rem
                   hover:opacity-80% hover:underline"
              href="https://in.ign.com/esports/191122/news/college-rivals-ampverse-and-dmi-finance-announce-new-collegiate-esports-ip#:~:text=College%20Rival%20%2D%20Esports%20Series%20launches%20this%20August.&text=This%20IP%20has%20been%20named,and%20gamers%20across%20the%20country"
              target="_blank"
              rel="noopener noreferrer"
            >
              READ{" "}
              <Image
                src="./upright-arrow.svg"
                className="h-auto w-auto"
                alt=""
              ></Image>
            </a>
          </Flex>
        </Flex>
        <Flex
          className="valorant-container w-full h-48% bg-pink p-0.625rem
             sm:py-2rem sm:px-1.56rem rounded-xl lg:rounded-1.25rem"
        >
          <Box className="valorant-image-container rounded-0.875rem overflow-hidden h-auto w-30% sm:w-15% lg:w-30%">
            <Image
              src="./news3.webp"
              alt="pubg"
              className="w-full h-full object-cover news-card-image"
            />
          </Box>
          <Flex className="valorant-text-container flex-col pl-5 w-[70%] sm:w-[85%] lg:w-[70%]">
            <Text className="helvetica-font text-sm lg:text-xl w-full pb-5 text-white">
              Ampverse x DMI Finance to bring College Rivals to unleash the
              Power of Esports in India
            </Text>
            <a
              className="news-card-button flex helvetica-light-font text-xs lg:text-0.937rem text-white hover:opacity-80% hover:underline"
              href="https://www.insidesport.in/esports-ampverse-x-dmi-finance-to-bring-college-rivals-to-unleash-the-power-of-esports-in-india/"
              target="_blank"
              rel="noopener noreferrer"
            >
              READ{" "}
              <Image
                loading="lazy"
                src="./white-upright-arrow.svg"
                className="h-auto w-auto"
                alt=""
              ></Image>
            </a>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default RivalsFlex;
