import FooterSeason2 from "@/components/globalComponents/FooterSeason2";
import NavbarSeason2 from "@/components/globalComponents/NavbarSeason2";
import Store from "@/components/store/store"

const page = ()=>{
    return(
        <div>
                  <NavbarSeason2/>
        <Store/>
        <FooterSeason2/>
        </div>
  
    )
}
export default page;