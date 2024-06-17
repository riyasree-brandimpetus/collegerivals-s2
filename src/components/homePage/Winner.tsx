import Image from "next/image";


const Winner = ()=>{

    return(
     
        <div className="w-full flex flex-col items-center bg-black">
        <div className="max-w-[1440px] w-full h-full flex flex-col justify-center">

            <div className="w-full h-full relative flex flex-col justify-center xl:px-20 xl:py-12 md:p-12 p-6 gap-4">

            <Image width={1260} height={319} src="../../assets/win-season.svg" alt="season1Img" className="absolute top-[12%] z-1 xl:w-fit md:w-[90%] md:block hidden"/>
            <Image width={574} height={242} src="../../assets/win-yellow.svg" alt="illustrationImg" className="absolute bottom-0 left-0 z-1 md:w-auto w-1/3"/>
            <Image width={574} height={242}  src="../../assets/win-pink.svg" alt="illustrationImg" className="absolute right-0 top-[60%] z-1 md:w-auto w-1/3"/>

            <h2 className="md:text-7xl text-2xl xl:mb-60 md:mb-56 mb-12 mt-12 text-center font-medium text-white z-10 ppFormula-font"><em>WINNERS</em></h2>

            <div className="flex flex-row flex-wrap justify-between w-full xl:gap-5 md:gap-4 gap-2 mb-8 text-white z-10">

                <div className="w-full relative flex justify-center">
                    <Image width={1277} height={575} src="/assets/win1.png" alt="winnerImg" className="object-cover w-full rounded-lg"/>
                    <p className="xl:text-6xl md:text-4xl text-2xl text-[#DBFD67] absolute bottom-[10%] ppFormula-font font-extrabold"><em>PRIZE POOL WORTH 50LAKHS</em></p>                    
                </div>

                <div className="xl:w-[40%] w-[48%]">
                    <Image width={571} height={507} src="/assets/win2.png" alt="phoneImg" className="object-cover h-full rounded-lg"/>
                </div>

                <div className="flex flex-col xl:w-[28%] w-[48%] gap-4">
                    <div className="w-full">
                        <Image width={330} height={292} src="/assets/win3.png" alt="ps5Img" className="object-cover h-full xl:w-full rounded-lg"/>
                    </div>
                    <div className="w-full">
                        <Image width={330} height={197} src="/assets/win4.png" alt="ipadImg" className="object-cover h-full xl:w-full rounded-lg"/>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap xl:w-[28%] w-full gap-4">
                    <div className="xl:w-full md:w-auto w-[47%]">
                        <Image width={330} height={197} src="/assets/win5.png" alt="macImg" className="object-cover h-full rounded-lg"/>
                    </div>
                    <div className="xl:w-full md:w-auto w-[47%]">
                        <Image width={330} height={292} src="/assets/win6.png" alt="xboxImg" className="object-cover h-full rounded-lg"/>
                    </div>
                </div>

            </div>
        </div>
        </div>
    </div>

    )
}
export default Winner;