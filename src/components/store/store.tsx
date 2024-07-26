import Image from "next/image"

const Store =()=>{
    return(
        <div className="flex w-full justify-center items-center h-full bg-black">
            <div className="flex w-full justify-center  max-w-[1440px] px-12 h-screen items-center">
 <div className="flex flex-col lg:flex-row gap-14 items-center justify-center">
    <div className='relative flex justify-center items-center'>
 <Image alt="" className="h-full w-full" src='/store2.png' width={584} height={405}/>
 <h2 className="text-#DBFD67 ppFormula-font font-bold text-2xl md:text-5xl absolute bottom-3">MERCH STORE</h2>
    </div>
    <div className="relative flex justify-center items-center"> 
 <Image alt="" src='/store1.png' className="h-full w-full" width={584} height={405}/>
 <h2 className="text-#DBFD67 ppFormula-font font-bold text-2xl md:text-5xl absolute bottom-3">AMPCREDS STORE</h2>
    </div>

    <div>

    </div>
 </div>
            </div>
        </div>
    )
}

export default Store