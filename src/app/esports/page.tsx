import EsportsNavbar from "@/components/esports/EsportsNavbar";
import Esports from "@/components/esports/HomeSection"
import Rules from "@/components/esports/Rules";
import NavbarSeason2 from "@/components/globalComponents/NavbarSeason2";
import RulesPage from "@/components/rules/RulesPage";

const Page = ()=>{
    return(
        <div>
            <NavbarSeason2/>
      
        <Esports/>
    <Rules/>
    </div>
    )
}
export default Page;