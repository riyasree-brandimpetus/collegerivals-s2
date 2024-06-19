

import HeroSection from "@/components/homePage/HeroSection";
import NavbarSeason2 from "@/components/globalComponents/NavbarSeason2";
import GamingSlider from "@/components/homePage/GamingSlider";
import Winner from "@/components/homePage/Winner";
import CityTicker from "@/components/homePage/CityTicker";
import Highlights from "@/components/homePage/Highlights";
import News from "@/components/homePage/News";
import FAQ from "@/components/homePage/faq";
import Footer from "@/components/globalComponents/Footer";
import TrackOurtruck from "@/components/homePage/TrackOurtruck";



export default function Home() {

  return (
    <>
      <NavbarSeason2 />
      <HeroSection />
      <GamingSlider />
      <Winner />
      <CityTicker />
      <Highlights />
      <TrackOurtruck/>
      <News />
      <FAQ/>
      <Footer/>
    </>
  );
}
