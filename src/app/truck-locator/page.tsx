import Schedule from "@/components/esports/Schedule"
import FooterSeason2 from "@/components/globalComponents/FooterSeason2"
import NavbarSeason2 from "@/components/globalComponents/NavbarSeason2"
import Galleryhub from "@/components/press/galleryhub"
import Trackhero from "@/components/truck-locator/hero-tuck"

const page = ()=>{
    return(
        <div>
<NavbarSeason2/>
     <Trackhero/>
        <Schedule/>
        <Galleryhub/>
        <FooterSeason2/>
        </div>
     
    )
}
export default page