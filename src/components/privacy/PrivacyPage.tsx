'use client';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Navbar from '@/components/globalComponents/Navbar';
import Footer from '@/components/globalComponents/Footer';
import Graphics from '@/components/globalComponents/Graphics';
import {
PRIVACY
} from '@/constants/privacy-and-terms';

const PrivacyPage = () => {
  return (
    <Box>
      <Navbar />
      <Graphics />
      <Heading
        className="ppFormula-font font-light italic text-center"
        size={'4xl'}
        fontSize={{ base: '2rem', lg: '5rem' }}
        lineHeight={'100%'}
        textAlign={'center'}
        color={'#333'}
        letterSpacing={{ base: '0.0975rem', lg: '0.235rem' }}
        mt={{ base: '5.375rem', lg: '8.25rem' }}
        mb={{ base: '0.5rem', lg: '1.25rem' }}
        pb={{ base: '3.125rem', lg: '4.625rem' }}
      >
        PRIVACY POLICY
      </Heading>

      <Flex
        className="questions-container"
        width="100%"
        px={{ base: '1.5rem', lg: '5rem' }}
        background="#FFFFFF"
      >
        <Box
          as="pre"
          className="helvetica-light-font font-normal whitespace-pre-wrap break-words w-full px-[1.5rem] lg:px-[5rem] py-[2rem] lg:py-[4rem] mb-[4rem] lg:mb-[7.25rem] bg-white"
        >
          {PRIVACY.data}
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default PrivacyPage;
