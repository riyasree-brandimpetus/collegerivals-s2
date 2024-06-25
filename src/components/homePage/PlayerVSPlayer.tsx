import React, { useRef, useState } from 'react'
import Slider from 'react-slick';
import { motion, useAnimation } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Button,
  Flex,
  Heading,
  Text,
  Image, useBreakpointValue,
  Box,
} from '@chakra-ui/react';
function PlayerVSPlayer() {
  const scrollRef = useRef(null);
  const controls = useAnimation();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

//   const winSrc = useBreakpointValue({
//     base: './win-image-mobile.svg',
//     md: './win-image.svg',
//   });

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
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Flex
      className="join-the-rivalry-text-container w-full flex-col max-screen-desktop 
      text-left mt-3.75rem lg:mt-7.438rem relative"
    >
      <Heading
        ref={scrollRef}
        as={motion.div}
        variants={{
          hidden: { opacity: 0, y: 55 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition="0.4 easeIn"
        className="ppFormula-font font-light italic text-1.75rem lg:text-6xl tracking-wide px-1.5rem lg:px-5rem "
      >
        PLAYER VS{' '}
        <Text as="span" className="text-pink">
          PLAYER
        </Text>
      </Heading>
      <Text
        className="ppFormula-font mt-0.7rem lg:mt-0.5rem pl-6 lg:pl-4.875rem text-lg lg:text-4xl 
          uppercase font-light italic  tracking-wide lg:tracking-wider"
      >
        Rise up against your rival
      </Text>

      <Box className="scrollmenu mt-0.2rem lg:mt-0.5rem">
        <Slider
          ref={sliderRef}
          {...settings}
          className="gap-0.40rem lg:gap-0.79rem px-6 lg:px-20 mt-1.90rem lg:mt-2.8rem mb-20 md:mb-0 overflow-x-hidden"
        >
          <Flex
            className="!flex flex-1 bg-cover bg-black text-white h-11.18rem lg:h-21.188rem 
               w-9rem lg:w-[18.048rem] rounded-xl flex-col justify-between slide"
            as={motion.div}
            animate={controls}
            ref={scrollRef}
            backgroundImage={'./Images/media/game2.webp'}
          >
            <Flex className="justify-end mr-0.31rem lg:mr-1.06rem pt-0.416rem lg:pt-0.937rem">
              <Button className=" helvetica-font rounded-full text-xs lg:text-sm font-bold bg-neon">
                PC
              </Button>
            </Flex>
            <Text
              className="helvetica-font leading-normal text-sm lg:text-1.35rem pb-0.61rem
               lg:pb-1.33rem pl-0.68rem lg:pl-1.35rem whitespace-normal truncate"
            >
              CS:GO
            </Text>
          </Flex>

          <Flex
            className="!flex flex-1 bg-cover bg-black text-white h-11.18rem lg:h-21.188rem
                w-9rem lg:w-18.048rem rounded-xl flex-col justify-between slide"
            as={motion.div}
            animate={controls}
            ref={scrollRef}
            backgroundImage={'./Images/media/game5.webp'}
          >
            <Flex className="justify-end mr-0.31rem lg:mr-1.06rem pt-0.416rem lg:pt-0.937rem">
              <Button className=" helvetica-font rounded-full text-xs lg:text-sm font-bold bg-neon">
                PC
              </Button>
            </Flex>
            <Text
              className="helvetica-font leading-normal text-sm lg:text-1.35rem
               pb-0.61rem lg:pb-1.33rem pl-0.68rem lg:pl-1.35rem uppercase whitespace-normal truncate"
            >
              Valorant
            </Text>
          </Flex>

          <Flex
            className="!flex flex-1 bg-cover bg-black text-white h-11.18rem lg:h-21.188rem
                w-9rem lg:w-18.048rem rounded-xl flex-col justify-between slide"
            backgroundImage={'./Images/media/game1.webp'}
            as={motion.div}
            animate={controls}
            ref={scrollRef}
          >
            <Flex className="justify-end mr-0.31rem lg:mr-1.06rem pt-0.416rem lg:pt-0.937rem">
              <Button className=" helvetica-font rounded-full text-xs lg:text-sm font-bold bg-neon">
                MOBILE
              </Button>
            </Flex>
            <Text
              className="helvetica-font leading-normal text-sm lg:text-1.35rem
               pb-0.61rem lg:pb-1.33rem pl-0.68rem lg:pl-1.35rem uppercase whitespace-normal truncate"
            >
              BATTLEGROUND MOBILE INDIA
            </Text>
          </Flex>

          <Flex
            className="!flex flex-1 bg-cover bg-black text-white h-11.18rem lg:h-21.188rem
                w-9rem lg:w-18.048rem rounded-xl flex-col justify-between slide"
            backgroundImage={'./Images/media/game4.webp'}
            as={motion.div}
            animate={controls}
            ref={scrollRef}
          >
            <Flex className="justify-end mr-0.31rem lg:mr-1.06rem pt-0.416rem lg:pt-0.937rem">
              <Button className=" helvetica-font rounded-full text-xs lg:text-sm font-bold bg-neon">
                MOBILE
              </Button>
            </Flex>
            <Text
              className="helvetica-font leading-normal text-sm lg:text-1.35rem pb-0.61rem
               lg:pb-1.33rem pl-0.68rem lg:pl-1.35rem uppercase whitespace-normal truncate"
            >
              Road to Valor
            </Text>
          </Flex>

          <Flex
            className="!flex flex-1 bg-cover bg-black text-white h-11.18rem lg:h-21.188rem
                w-9rem lg:w-18.048rem rounded-xl flex-col justify-between slide"
            backgroundImage={'./Images/media/game3.webp'}
            as={motion.div}
            animate={controls}
            ref={scrollRef}
          >
            <Flex className="justify-end mr-0.31rem lg:mr-1.06rem pt-0.416rem lg:pt-0.937rem">
              <Button className=" helvetica-font rounded-full text-xs lg:text-sm font-bold bg-neon">
                CONSOLE
              </Button>
            </Flex>
            <Text
              className="helvetica-font leading-normal text-sm lg:text-1.35rem pb-0.61rem
               lg:pb-1.33rem pl-0.68rem lg:pl-1.35rem uppercase whitespace-normal truncate"
            >
              FIFA 2023
            </Text>
          </Flex>

          <Flex
            className="!flex flex-1 bg-cover bg-black text-white flex-col h-11.18rem lg:h-21.188rem
                w-9rem lg:w-18.048rem rounded-xl justify-between slide"
            backgroundImage={'./Images/media/game6.webp'}
            as={motion.div}
            animate={controls}
            ref={scrollRef}
          >
            <Flex className="justify-end mr-0.31rem lg:mr-1.06rem pt-0.416rem lg:pt-0.937rem">
              <Button className=" helvetica-font rounded-full text-xs lg:text-sm font-bold bg-neon">
                CONSOLE
              </Button>
            </Flex>
            <Text
              className="helvetica-font leading-normal text-sm lg:text-1.35rem pb-0.61rem 
              lg:pb-1.33rem pl-0.68rem lg:pl-1.35rem uppercase whitespace-normal truncate"
            >
              Tekken 7
            </Text>
          </Flex>
        </Slider>
      </Box>
      <button
        onClick={() => goToSlide(activeSlideIndex - 1)}
        className={`absolute right-auto left-[9%] sm:left-[5%] bottom-[3%] md:bottom-auto md:left-auto md:right-[15%]
           lg:right-[13%] md:top-[13%] ${
             activeSlideIndex === 0 ? 'opacity-40 cursor-not-allowed' : ''
           }`}
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
          bottom-[3%] md:bottom-auto md:top-[13%] md:right-[7%] md:left-auto ${
            (activeSlideIndex === 2 && window.innerWidth >= 768) ||
            (activeSlideIndex === 4 && window.innerWidth < 768)
              ? 'opacity-40 cursor-not-allowed'
              : ''
          }`}
      >
        <Image
          src="right-arrow.svg"
          alt="right-arrow"
          className="h-auto w-auto"
        />
      </button>
    </Flex>
  );
}

export default PlayerVSPlayer