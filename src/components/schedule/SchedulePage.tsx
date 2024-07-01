'use client';

import { Box } from '@chakra-ui/react';
import Hero from '@/components/schedule/hero';
import Accordian from '@/components/schedule/accordian';

import Graphics from '@/components/globalComponents/Graphics';
import { useState } from 'react';

const SchedulePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
   
      <Graphics />
      <Hero />
      {/* <Accordian /> */}
   
    </Box>
  );
};

export default SchedulePage;
