'use client';

import { Box } from '@chakra-ui/react';
import Hero from '@/components/schedule/hero';
import Accordian from '@/components/schedule/accordian';
import Navbar from '@/components/globalComponents/Navbar';
import Footer from '@/components/globalComponents/Footer';
import Graphics from '@/components/globalComponents/Graphics';
import { useState } from 'react';

const SchedulePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <Graphics />
      <Hero />
      {/* <Accordian /> */}
      <Footer />
    </Box>
  );
};

export default SchedulePage;
