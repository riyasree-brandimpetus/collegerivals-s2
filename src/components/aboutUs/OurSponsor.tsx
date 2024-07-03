const OurSponsor = ()=>{
    return(
        <div className="w-full flex flex-col place-items-center justify-center pt-8 bg-black">
        <div className="max-w-[1440px] w-full h-full flex flex-col justify-center p-12">

            <h2 className="md:text-6xl text-2xl md:mb-24 mb-12 text-center font-extrabold text-white z-10 ppFormula-font uppercase"><em>Trusted By</em></h2>

            <div className="flex flex-row flex-wrap justify-around w-full md:gap-20 gap-7 mb-8 text-white z-10">
                <img src="/sponsor1.svg" alt="" className="md:w-auto w-20"/>
                <img src="/sponsor2.svg" alt="" className="md:w-auto w-20"/>
                <img src="/sponsor3.svg" alt="" className="md:w-auto w-20"/>
                <img src="/sponsor4.svg" alt="" className="md:w-auto w-20"/>
                <img src="/sponsor5.svg" alt="" className="md:w-auto w-20"/>
              
            </div>

        </div>

    </div>
    )
}
export default OurSponsor