import Image from "next/image";
import Link from "next/link";

const News =()=>{
    return(
        <div className="w-full flex flex-col items-center bg-black">
        <div className="max-w-[1440px] w-full h-full flex flex-col justify-center slate-400 xl:px-20 xl:py-12 lg:p-12 p-6 gap-4">

            <h2 className="md:text-7xl text-2xl md:mb-24 mb-12 mt-12 text-center font-bold text-white ppFormula-font"><em>NEWS & UPDATES</em></h2>

            <div className="flex md:flex-row flex-col justify-center w-full xl:gap-10 md:gap-4 gap-10 mb-8 text-white">

                <div className="flex flex-col md:w-33%">
                    <Link href="/">
                    <Image width={400} height={224} src="/assets/news1.png" alt="newsImg" className="w-full"/>
                    <div className="flex flex-col xl:gap-3 gap-2 py-5">
                        <h3 className="xl:text-2xl text-xl helvetica-light-font ">Masters Shanghai merch collection</h3>
                        <p className="text-base xl:font-normal font-light helvetica-extralight-font  ">Celebrate Masters Shanghai with this limited-edition merch collection</p>
                    </div>
                    </Link>
                </div>
               
                

                <div className="flex flex-col md:w-33% ">
                <Link href="/">
                    <Image width={400} height={224}  src="/assets/news2.png" alt="newImg" className="w-full"/>
                    <div className="flex flex-col xl:gap-3 gap-2 py-5">
                        <h3 className="xl:text-2xl text-xl helvetica-light-font ">Masters Shanghai merch collection</h3>
                        <p className="text-base xl:font-normal helvetica-extralight-font ">We’ve done some small updates to Brimstone’s Sky Smoke (E) to ensure that
                            it fully covers the area indicated by the UI when you are placing it. </p>
                    </div>
                    </Link>
                </div>

                <div className="flex flex-col md:w-33% w- ">
                <Link href="/">
                    <Image width={400} height={224}  src="/assets/news1.png" alt="newsImg" className="w-full"/>
                    <div className="flex flex-col xl:gap-3 gap-2 py-5">
                        <h3 className="xl:text-2xl text-xl helvetica-extralight-font  ">Masters Shanghai merch collection</h3>
                        <p className="text-base xl:font-normal ">Celebrate Masters Shanghai with this limited-edition merch collection</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default News;