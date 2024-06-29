import AboutPage from "@/components/aboutUs/AboutPage";
import AboutHero from "@/components/aboutUs/HeroSection";
import LivePlatforms from "@/components/aboutUs/LivePlatforms";
import OurSponsor from "@/components/aboutUs/OurSponsor";
import OurTeam from "@/components/aboutUs/OurTeam";
import SponsorsTicker from "@/components/aboutUs/SponsorsTicker";
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
  <OurTeam/>
<OurSponsor/>
<WeAreLiveAt/>
  <FooterSeason2/>
  </div>
  );
};

export default Page;
