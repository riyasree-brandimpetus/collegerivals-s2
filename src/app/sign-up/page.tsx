// 'use client';

import Faq from '@/components/homePage/faq';

import Graphics from '@/components/globalComponents/Graphics';
import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import BasicDetailsForm from '@/components/sign-up/BasicDetailsForm';
import SignUpForm from '@/components/sign-up/SignUpForm';

export default function SignUp() {
//   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <Graphics isOpen={isOpen} />
      <Hero />
      <TickerContainer />
      <Rivals />
      <Redemption />
      <Faq />
      <Footer /> */}
      <SignUpForm />
    </>
  );
}
