import Image from "next/image";


const Winner = ()=>{

    return(
     
        <div className="w-full flex flex-col items-center bg-black relative">
        <div className="max-w-[1440px] w-full h-full flex flex-col justify-center">

            <div className="w-full h-full relative flex flex-col justify-center xl:px-20 xl:py-12 md:p-12 p-6 gap-4">

         


            <h2 className="md:text-7xl text-2xl  text-center font-medium text-white z-10 ppFormula-font"><em>WINNERS</em></h2>

            <div className="flex flex-row flex-wrap justify-between w-full xl:gap-5 md:gap-4 gap-2 mb-8 text-white z-10">

               <Image src="/winner-img.svg" alt="" width={1277} height={838}/>

            </div>
        </div>
        </div>
    </div>

    )
}
export default Winner;