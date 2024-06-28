const OurTeam = ()=>{
    return(
        <div className="w-full flex flex-col place-items-center justify-center bg-black relative">
               <img src="/team-pink.svg" alt="" className="absolute top-0 right-0 z-1 xl:w-auto md:w-1/3 w-2/3"/>
               <img src="/team-yellow.svg" alt="" className="absolute md:top-1/5 bottom-0 left-0 z-1 xl:w-auto md:w-1/4 w-2/3"/>
        <div className="max-w-[1440px] w-full h-full flex flex-col justify-center p-12 ">

         


            <h2 className="md:text-6xl text-2xl md:mb-20 mb-12 text-center font-extrabold text-white z-10"><em>OUR TEAM</em>
            </h2>

            <div className="flex flex-row flex-wrap justify-center w-full gap-5 mb-8 text-white z-10">

                <div className="grid md:grid-cols-4 grid-cols-2 md:gap-12 gap-3">
                    <div>
                        <img src="/team1.png" alt=""/>
                    </div>
                    <div>
                        <img src="/team2.png" alt=""/>
                    </div>
                    <div>
                        <img src="/team1.png" alt=""/>
                    </div>
                    <div>
                        <img src="/team2.png" alt=""/>
                    </div>
                    <div>
                        <img src="/team1.png" alt=""/>
                    </div>

                    <div>
                        <img src="/team2.png" alt=""/>
                    </div>
                    <div>
                        <img src="/team1.png" alt=""/>
                    </div>
                    <div>
                        <img src="/team2.png" alt=""/>
                    </div>
                </div>


            </div>


        </div>

    </div>

    )
}
export default OurTeam