import FooterSeason2 from "@/components/globalComponents/FooterSeason2"
import NavbarSeason2 from "@/components/globalComponents/NavbarSeason2"
import Contenthub from "@/components/press/content-hub"
import Galleryhub from "@/components/press/gallery0hub"
import Newshub from "@/components/press/new-hub"


const Page =()=>{
    return (
        <div>
            <NavbarSeason2/>
     <Contenthub/>
     <Galleryhub/>
     <Newshub/>
            <FooterSeason2/>
        </div>
    )
}

export default Page