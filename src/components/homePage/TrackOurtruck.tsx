import Image from "next/image"

const TrackOurtruck = () =>{

    return(
        <div id="truck-locator" className="flex items-center justify-center w-full md:pt-44 pt-5 bg-black md:pb-60">
        <div className="w-full flex flex-col items-center justify-center max-w-[1440] ">
            <h2 className="ppFormula-font md:mb-16 mb-7 italic text-2xl md:text-6xl text-#DBFD67">TRACK <span className="text-white">OUR</span> <span className="text-#E7327C">TRUCK</span></h2>
            <Image src="/track-our-truck-img.webp" alt="track-our-truck" width={1281} height={688} />
          
        </div>
        </div>
    )
}
export default TrackOurtruck;