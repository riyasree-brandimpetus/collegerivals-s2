import Esports from '@/components/esports/HomeSection';
import Rules from '@/components/esports/Rules';
import EsportsAccordian from '@/components/esports/Accordian';

import FAQ from '@/components/esports/faq';

import NavbarSeason2 from '@/components/globalComponents/NavbarSeason2';
import FooterSeason2 from '@/components/globalComponents/FooterSeason2';
import Schedule from '@/components/esports/Schedule';

const Page = () => {
  return (
    <div>
      <NavbarSeason2 />
      <Esports />
      <Schedule/>
      <EsportsAccordian />
    
      <Rules />
      <FAQ />
 <FooterSeason2/>
    </div>
  );
};
export default Page;
