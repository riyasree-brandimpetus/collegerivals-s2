'use client';
import Graphics from '@/components/globalComponents/Graphics';
import Navbar from '@/components/globalComponents/Navbar';
import ContactBody from '@/components/contact-us/ContactBody';
import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import Footer from '@/components/globalComponents/Footer';

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box className="contact-us-container" width="100%">
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <Graphics />
      <ContactBody />
      <Box background="#B4B4B4">
        <Footer />
      </Box>
    </Box>
  );
};

export default ContactPage;
