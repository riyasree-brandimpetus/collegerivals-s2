import Esports from '@/components/esports/HomeSection';
import Rules from '@/components/esports/Rules';
import EsportsAccordian from '@/components/esports/Accordian';

import FAQ from '@/components/esports/faq';
import Footer from '@/components/globalComponents/Footer';
import NavbarSeason2 from '@/components/globalComponents/NavbarSeason2';

const Page = () => {
  return (
    <div>
      <NavbarSeason2 />
      <Esports />
      <EsportsAccordian />
      <Rules />
      <FAQ />
      <Footer />
    </div>
  );
};
export default Page;
