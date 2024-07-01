'use client';
import Graphics from '@/components/globalComponents/Graphics';

import ContactBody from '@/components/contact-us/ContactBody';
import { Box } from '@chakra-ui/react';
import { useState } from 'react';


const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box className="contact-us-container" width="100%">
    
      <Graphics />
      <ContactBody />
      <Box background="#B4B4B4">

      </Box>
    </Box>
  );
};

export default ContactPage;
