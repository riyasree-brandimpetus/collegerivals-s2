const Newshub =()=>{

    return(
        <div className="w-full flex flex-col items-center bg-black">
        <div
            className="max-w-[1440px] w-full h-full flex flex-col justify-center place-items-center xl:px-24 xl:py-12 md:p-12 p-6 gap-4">

            <h2 className="md:text-7xl text-2xl md:mb-11 mb-5 text-[#DBFD67] font-extrabold"><em>NEWS & UPDATES</em></h2>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">

                <div className="flex flex-col">
                    <img src="./assets/news1.png" alt="" className="w-full rounded-xl"/>
                    <div className="flex flex-col md:gap-5 gap-3 md:py-7 py-5">
                        <div className="flex flex-row gap-1.5">
                            <p className="md:text-base text-sm text-[#DBFD67]">GAME UPDATES</p>
                            <span className="text-[#555555] md:text-base text-xs">| Last week</span>
                        </div>
                        <h3 className="md:text-2xl text-lg text-white">Masters Shanghai merch collection</h3>

                    </div>
                </div>

                <div className="flex flex-col">
                    <img src="./assets/news2.png" alt="" className="w-full rounded-xl"/>
                    <div className="flex flex-col md:gap-5 gap-3 md:py-7 py-5">
                        <div className="flex flex-row gap-1.5">
                            <p className="md:text-base text-sm text-[#DBFD67]">COMMUNITY</p>
                            <span className="text-[#555555] md:text-base text-xs">| 2 weeks ago</span>
                        </div>
                        <h3 className="md:text-2xl text-lg text-white">Masters Shanghai merch collection</h3>
                    </div>
                </div>

                <div className="flex flex-col">
                    <img src="./assets/news3.png" alt="" className="w-full rounded-xl"/>
                    <div className="flex flex-col md:gap-5 gap-3 md:py-7 py-5">
                        <div className="flex flex-row gap-1.5">
                            <p className="md:text-base text-sm text-[#DBFD67]">COMMUNITY</p>
                            <span className="text-[#555555] md:text-base text-xs">| 2 weeks ago</span>
                        </div>
                        <h3 className="md:text-2xl text-lg text-white">Masters Shanghai merch collection</h3>
                    </div>
                </div>

                <div className="flex flex-col">
                    <img src="./assets/news1.png" alt="" className="w-full rounded-xl"/>
                    <div className="flex flex-col md:gap-5 gap-3 md:py-7 py-5">
                        <div className="flex flex-row gap-1.5">
                            <p className="md:text-base text-sm text-[#DBFD67]">GAME UPDATES</p>
                            <span className="text-[#555555] md:text-base text-xs">| Last week</span>
                        </div>
                        <h3 className="md:text-2xl text-lg text-white">Masters Shanghai merch collection</h3>
                    </div>
                </div>

                <div className="flex flex-col">
                    <img src="./assets/news2.png" alt="" className="w-full rounded-xl"/>
                    <div className="flex flex-col md:gap-5 gap-3 md:py-7 py-5">
                        <div className="flex flex-row gap-1.5">
                            <p className="md:text-base text-sm text-[#DBFD67]">COMMUNITY</p>
                            <span className="text-[#555555] md:text-base text-xs">| 2 weeks ago</span>
                        </div>
                        <h3 className="md:text-2xl text-lg text-white">Masters Shanghai merch collection</h3>
                    </div>
                </div>

                <div className="flex flex-col">
                    <img src="./assets/news3.png" alt="" className="w-full rounded-xl"/>
                    <div className="flex flex-col md:gap-5 gap-3 md:py-7 py-5">
                        <div className="flex flex-row gap-1.5">
                            <p className="md:text-base text-sm text-[#DBFD67]">COMMUNITY</p>
                            <span className="text-[#555555] md:text-base text-xs">| 2 weeks ago</span>
                        </div>
                        <h3 className="md:text-2xl text-lg text-white">Masters Shanghai merch collection</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>


    )
}

export default Newshub;