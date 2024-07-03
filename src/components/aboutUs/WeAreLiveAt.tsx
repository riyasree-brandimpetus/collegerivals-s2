import Link from "next/link";

const WeAreLiveAt = () =>{
    return(

        <div className="w-full flex flex-col place-items-center justify-center bg-black pb-20 pt-16">
        <div className="max-w-[1440px] w-full h-full flex flex-col justify-center md:p-12 p-6">

            <h2 className="md:text-6xl text-2xl md:mb-24 mb-12 text-center font-extrabold text-white ppFormula-font"><em>WE ARE LIVE AT</em></h2>

            <div className="flex flex-row flex-wrap justify-around w-full md:gap-71 gap-7 mb-8 xl:px-44 md:px-12 text-white">
                <Link className="hover:border-[#282828]  border-black border-2 p-4 rounded-lg" href="https://live.glance.com/discover/trends/" target="_blank">   <img src="/live1.svg" alt="" className="md:w-auto w-20"/></Link>
                <Link className="hover:border-[#282828]  border-black border-2 p-4 rounded-lg" href="https://www.youtube.com/@CollegeRivalsIn/featured" target="_blank">   <img src="/live2.svg" alt="" className="md:w-auto w-20"/></Link>
                <Link className="hover:border-[#282828]  border-black border-2 p-4 rounded-lg" href="https://www.twitch.tv/collegerivalsin" target="_blank">   <img src="/live3.svg" alt="" className="md:w-auto w-20"/></Link>
                <Link className="hover:border-[#282828]  border-black border-2 p-4 rounded-lg" href="" target="_blank">   <img src="/live4.svg" alt="" className="md:w-auto w-20"/></Link>
                <Link className="hover:border-[#282828]  border-black border-2 p-4 rounded-lg" href=" https://kick.com/collegerivalsin" target="_blank">   <img src="/live5.svg" alt="" className="md:w-auto w-20"/></Link>
                <Link className="hover:border-[#282828]  border-black border-2 p-4 rounded-lg" href=" https://www.facebook.com/collegerivalsin/" target="_blank">   <img src="/live6.svg" alt="" className="md:w-auto w-20"/></Link>
                <Link className="hover:border-[#282828]  border-black border-2 p-4 rounded-lg" href="  https://rooter.app.link/ZKy7Nv0J1Cb" target="_blank">   <img src="/live7.webp" alt="" className="md:w-48 w-20"/></Link>
                <Link className="hover:border-[#282828]  border-black border-2 p-4 rounded-lg" href=" https://loco.gg/streamers/FGRFS22K0M" target="_blank">   <img src="/live8.png" alt="" className="md:w-48 w-20"/></Link>
             
                
            </div>

        </div>

    </div>
    )
}
export default WeAreLiveAt;