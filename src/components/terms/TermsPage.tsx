'use client';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import Graphics from '@/components/globalComponents/Graphics';
import { TERMS } from '@/constants/privacy-and-terms';
import NavbarSeason2 from '../globalComponents/NavbarSeason2';
import FooterSeason2 from '../globalComponents/FooterSeason2';
const TermsPage = () => {
  return (
    <Box bgColor={"black"}>
      <NavbarSeason2 />
      <Graphics />
      <Heading
        className="ppFormula-font italic font-light text-center"
        size={'4xl'}
        fontSize={{ base: '2rem', lg: '5rem' }}
        lineHeight={'100%'}
        color={'white'}
        letterSpacing={{ base: '0.0975rem', lg: '0.235rem' }}
        mt={{ base: '5.375rem', lg: '8.25rem' }}
        mb={{ base: '0.5rem', lg: '1.25rem' }}
        pb={{ base: '3.125rem', lg: '4.625rem' }}
      >
        TERMS AND CONDITIONS
      </Heading>

      <Flex
        className="questions-container"
        width="100%"
        px={{ base: '1.5rem', lg: '5rem' }}
        background="black"
      >
        <Box
          as="pre"
          className="helvetica-light-font font-normal whitespace-pre-wrap break-words w-full px-[1.5rem] lg:px-[5rem] py-[2rem] lg:py-[4rem] mb-[4rem] lg:mb-[7.25rem] bg-black text-white" 
        >
          {TERMS.data}
        </Box>
      </Flex>
      <FooterSeason2 />
    </Box>
  );
};

export default TermsPage;
