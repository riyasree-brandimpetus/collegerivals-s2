// 'use client';
import Hero from '@/components/homePage/hero';
import TickerContainer from '@/components/homePage/tickerContainer';
import Rivals from '@/components/homePage/rivals';
import Redemption from '@/components/homePage/redemption';
import Faq from '@/components/homePage/faq';
import Navbar from '@/components/globalComponents/Navbar';
import Footer from '@/components/globalComponents/Footer';
import Graphics from '@/components/globalComponents/Graphics';
import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import BasicDetailsForm from '@/components/sign-up/BasicDetailsForm';
import SignUpForm from '@/components/sign-up/SignUpForm';
import ProfileDashboard from '@/components/my-profile/ProfileDashboard';

export default function MyProfile() {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <ProfileDashboard/>
    </>
  );
}
