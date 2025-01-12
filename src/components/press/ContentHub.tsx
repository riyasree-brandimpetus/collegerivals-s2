
import Link from "next/link"

const ContentHub = ()=>{

    return(
        <div className="w-full flex flex-col place-items-center justify-center bg-black">
        <div className="max-w-[1440px] w-full h-full flex flex-col justify-center place-items-center lg:p-24 p-6 mt-24 gap-4 ">

            <h2 className="md:text-7xl text-2xl md:mb-11 mb-9 text-[#DBFD67] font-extrabold"><em>CONTENT HUB</em></h2>

            <div className="flex md:flex-row flex-col items-start  gap-12">

                <div className="flex flex-col justify-center place-items-center gap-11">
                    <Link href="https://www.youtube.com/watch?v=z9q54X4eXVY" target="_blank">
                  <video src="/content4.mp4"  className="rounded-lg" loop autoPlay muted></video>
                    <p className="text-white md:text-2xl mt-6 text-lg">College Rivals Season 2 | Official Launch Video</p>
                    </Link>
                </div>

                <div className="flex flex-col justify-center place-items-center gap-11">
                <Link  href="https://www.youtube.com/watch?v=_rZbggv13po" target="_blank">
                <video  src="/content3.mp4" className="rounded-lg"   loop autoPlay muted></video>
                    <p className="text-white md:text-2xl mt-6 text-lg">The #EpicRivalry that was College Rivals Grand Finale</p>
                    </Link>
                </div>

            </div>

        </div>

    </div>

    )
}

export default ContentHub