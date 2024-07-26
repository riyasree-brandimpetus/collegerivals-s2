import FooterSeason2 from "@/components/globalComponents/FooterSeason2";
import NavbarSeason2 from "@/components/globalComponents/NavbarSeason2";
import ContentHub from "@/components/press/ContentHub";

import GalleryPress from "@/components/press/GalleryPress";
import Newshub from "@/components/press/NewHub";

const Page = () => {
  return (
    <div>
      <NavbarSeason2 />
      <ContentHub />
      <GalleryPress />
      <Newshub />
      <FooterSeason2 />
    </div>
  );
};

export default Page;
