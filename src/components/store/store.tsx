import Image from "next/image"
import Link from "next/link"

const Store =()=>{
    return(
        <div className="flex w-full justify-center items-center h-full bg-black">
            <div className="flex w-full justify-center  max-w-[1440px] px-12  lg:h-screen items-center">
 <div className="flex flex-col lg:flex-row gap-14 max-lg:mt-40 items-center justify-center ">

 <Link href='https://store.collegerivals.com/' target="_blank">
    <div className='relative flex justify-center items-center news-container'>
        <div className="overflow-hidden rounded-lg">
 <Image alt="" className="h-full w-full" src='/store2.png' width={584} height={405}/>
 </div>
 <h2 className="text-#DBFD67 ppFormula-font font-bold text-2xl md:text-5xl absolute bottom-3">MERCH STORE</h2>
    </div>
    </Link>


    <Link href='https://gamecredits.ampverse.com/' target="_blank">
    <div className="relative flex justify-center items-center news-container">
    <div className="overflow-hidden rounded-lg">
 <Image alt="" src='/store1.png' className="h-full w-full" width={584} height={405}/>
 </div>
 <h2 className="text-#DBFD67 ppFormula-font font-bold text-2xl md:text-5xl absolute bottom-3">AMPCREDS STORE</h2>
    </div>
    </Link>

    <div>

    </div>
 </div>
            </div>
        </div>
    )
}

export default Store