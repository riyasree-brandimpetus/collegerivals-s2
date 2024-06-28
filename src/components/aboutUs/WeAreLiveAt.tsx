const WeAreLiveAt = () =>{
    return(

        <div className="w-full flex flex-col place-items-center justify-center bg-black">
        <div className="max-w-[1440px] w-full h-full flex flex-col justify-center md:p-12 p-6">

            <h2 className="md:text-6xl text-2xl md:mb-24 mb-12 text-center font-extrabold text-white"><em>WE ARE LIVE AT</em></h2>

            <div className="flex flex-row flex-wrap justify-around w-full md:gap-71 gap-7 mb-8 xl:px-44 md:px-12 text-white">
                <img src="/live1.svg" alt="" className="md:w-auto w-20"/>
                <img src="/live2.svg" alt="" className="md:w-auto w-20"/>
                <img src="/live3.svg" alt="" className="md:w-auto w-20"/>
                <img src="/live4.svg" alt="" className="md:w-auto w-20"/>
                <img src="/live5.svg" alt="" className="md:w-auto w-20"/>
                <img src="/live6.svg" alt="" className="md:w-auto w-20"/>
            </div>

        </div>

    </div>
    )
}
export default WeAreLiveAt;