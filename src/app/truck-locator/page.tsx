import Schedule from "@/components/esports/Schedule";
import FooterSeason2 from "@/components/globalComponents/FooterSeason2";
import NavbarSeason2 from "@/components/globalComponents/NavbarSeason2";
import GalleryPress from "@/components/press/GalleryPress";
import HeroTruck from "@/components/truck-locator/HeroTruck";



const page = () => {
  return (
    <div>
      <NavbarSeason2 />
   <HeroTruck/>
      <Schedule />
      <GalleryPress />
      <FooterSeason2 />
    </div>
  );
};
export default page;
