
import AboutHero from "@/components/aboutUs/HeroSection";

import OurSponsor from "@/components/aboutUs/OurSponsor";

import WeAreLiveAt from "@/components/aboutUs/WeAreLiveAt";
import WelcomeSlider from "@/components/aboutUs/WelcomeSlider";
import FooterSeason2 from "@/components/globalComponents/FooterSeason2";
import NavbarSeason2 from "@/components/globalComponents/NavbarSeason2";
import { Metadata } from 'next';

// Static metadata
export const metadata: Metadata = {
  title: 'College Rivals | About Us',
  description: 'Indian College Esport Competition',
};

const Page = () => {
  return (
    <div>
    <NavbarSeason2/>
  <AboutHero/>
  <WelcomeSlider/>

<OurSponsor/>
<WeAreLiveAt/>
  <FooterSeason2/>
  </div>
  );
};

export default Page;
