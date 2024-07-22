import Image from "next/image"

const Contenthub = ()=>{

    return(
        <div className="w-full flex flex-col place-items-center justify-center bg-black">
        <div className="max-w-[1440px] w-full h-full flex flex-col justify-center place-items-center lg:p-24 p-6 mt-24 gap-4 ">

            <h2 className="md:text-7xl text-2xl md:mb-11 mb-9 text-[#DBFD67] font-extrabold"><em>CONTENT HUB</em></h2>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-12">

                <div className="flex flex-col justify-center place-items-center gap-11">
                    <Image width={562} height={362} src="/assets/content1.png" alt="" className="rounded-3xl"/>
                    <p className="text-white md:text-2xl text-lg">Masters Shanghai merch collection</p>
                </div>

                <div className="flex flex-col justify-center place-items-center gap-11">
                    <Image width={562} height={362} src="/assets/content1.png" alt="" className="rounded-3xl"/>
                    <p className="text-white md:text-2xl text-lg">Masters Shanghai merch collection</p>
                </div>

            </div>

        </div>

    </div>

    )
}

export default Contenthub