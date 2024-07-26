import Image from "next/image";
import Link from "next/link";

const Newshub =()=>{

    return(
        <div className="w-full flex flex-col items-center bg-black">
        <div
            className="max-w-[1440px] w-full h-full flex flex-col justify-center place-items-center xl:px-24 xl:py-12 md:p-12 p-6 gap-4">

            <h2 className="md:text-7xl text-2xl md:mb-11 mb-5 text-[#DBFD67] font-extrabold"><em>NEWS & UPDATES</em></h2>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">

                <div className="flex flex-col news-container">
                <Link href="https://animationxpress.com/games/tanmay-bhat-stars-in-college-rivals-debut-seven-video-marketing-series/" target="_blank">
                    <div className="overflow-hidden rounded-lg">
                    <Image width={400} height={224} src="/Tanmay-Bhat-news.webp" alt="" className="w-full h-56 object-cover rounded-xl"/>
                    </div>
           
                    <div className="flex flex-col md:gap-5 gap-3 md:py-7 py-5">
                        <div className="flex flex-row gap-1.5">
                            <p className="md:text-base text-sm text-[#DBFD67] uppercase">Influencer</p>
                            <span className="text-[#555555] md:text-base text-xs">| 08/01/2024 </span>
                        </div>
                        <h3 className="md:text-2xl text-lg text-white">Tanmay Bhat stars in College Rivals’ debut seven-video marketing series</h3>

                    </div>
                    </Link>
                </div>

                <div className="flex flex-col news-container">
                <Link href="https://www.indiatodaygaming.com/story/college-rivals-grand-finale-creates-history-for-indian-esports-bgmi-finalist-gets-professional-contract-with-rival-pro-esports-3847" target="_blank">
                    <div className="overflow-hidden rounded-lg">
                    <Image width={400} height={224} src="/vayam-bhatt-news.webp" alt="" className="w-full h-56 object-cover rounded-xl"/>
                    </div>
                    <div className="flex flex-col md:gap-5 gap-3 md:py-7 py-5">
                        <div className="flex flex-row gap-1.5">
                            <p className="md:text-base text-sm text-[#DBFD67]">COMMUNITY</p>
                            <span className="text-[#555555] md:text-base text-xs">| 05/03/2024 </span>
                        </div>
                        <h3 className="md:text-2xl text-lg text-white">College Rivals Grand Finale Creates History for Indian Esports</h3>
                    </div>
                    </Link>
                </div>

                <div className="flex flex-col news-container">
                <Link href="https://in.ign.com/esports/202375/news/college-rivals-hosts-flash-mobs-in-mumbai-ahead-of-its-esports-grand-finale" target="_blank">
                    <div className="overflow-hidden rounded-lg">
                    <Image width={400} height={224} src="/IGN-news.webp" alt="" className="w-full h-56 object-cover rounded-xl"/>
                    </div>
                    <div className="flex flex-col md:gap-5 gap-3 md:py-7 py-5">
                        <div className="flex flex-row gap-1.5">
                            <p className="md:text-base text-sm text-[#DBFD67]">COMMUNITY</p>
                            <span className="text-[#555555] md:text-base text-xs">| 20/02/2024</span>
                        </div>
                        <h3 className="md:text-2xl text-lg text-white">College Rivals Hosts Flash Mobs in Mumbai Ahead of Its Esports Grand Finale Along With Free Ticket Giveaways</h3>
                    </div>
                    </Link>
                </div>

                <div className="flex flex-col news-container">
                <Link href="https://www.cnbctv18.com/sports/college-rivals-grand-finale-bgmi-finalist-gets-professional-contract-with-rival-pro-e-sports-19199201.htm" target="_blank">
                    <div className="overflow-hidden rounded-lg">
                    <Image width={400} height={224} src="/divyansh-vashisht-news.webp" alt="" className="w-full h-56 object-cover rounded-xl"/>
                    </div>
                    <div className="flex flex-col md:gap-5 gap-3 md:py-7 py-5">
                        <div className="flex flex-row gap-1.5">
                            <p className="md:text-base text-sm text-[#DBFD67] uppercase">Community</p>
                            <span className="text-[#555555] md:text-base text-xs">|  5/03/2024</span>
                        </div>
                        <h3 className="md:text-2xl text-lg text-white">College Rivals Grand Finale: BGMI finalist gets professional contract with Rival Pro E-sports</h3>
                    </div>
                    </Link>
                </div>

                <div className="flex flex-col news-container">
                <Link href="https://www.insidesport.in/bgmi/college-rivals-season-2-kicks-off-registration-opens-july-4/" target="_blank">
                <div className="overflow-hidden rounded-lg">
                    <Image width={400} height={224} src="/news-college-rivalss2.jpg" alt="" className="w-full h-56 object-cover rounded-xl"/>
                    </div>
                    <div className="flex flex-col md:gap-5 gap-3 md:py-7 py-5">
                        <div className="flex flex-row gap-1.5">
                            <p className="md:text-base text-sm text-[#DBFD67] uppercase">Colleges, Esports</p>
                            <span className="text-[#555555] md:text-base text-xs">| 04/07/2024</span>
                        </div>
                        <h3 className="md:text-2xl text-lg text-white">College Rivals Season 2 kicks off, registration opens July 4</h3>
                    </div>
                    </Link>
                </div>

                <div className="flex flex-col news-container">
                <Link href="https://www.insidesport.in/bgmi/college-rivals-season-2-kicks-off-registration-opens-july-4/" target="_blank">
                <div className="overflow-hidden rounded-lg">
                    <Image width={400} height={224} src="/news-amp-dmi.png" alt="" className="w-full h-56 object-cover rounded-xl"/>
                    </div>
                    <div className="flex flex-col md:gap-5 gap-3 md:py-7 py-5">
                        <div className="flex flex-row gap-1.5">
                            <p className="md:text-base text-sm text-[#DBFD67] uppercase">Esports</p>
                            <span className="text-[#555555] md:text-base text-xs">| 04/07/2024</span>
                        </div>
                        <h3 className="md:text-2xl text-lg text-white">Ampverse DMI sets ambitious roadmap for the Indian gaming sector</h3>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="flex w-full justify-between flex-col md:flex-row items-center py-16">
                <h2 className="ppFormula-font italic text-white text-4xl  md:text-6xl">GET IN TOUCH WITH US!</h2>
                <div className=" rounded-lg ">
                  <Link href="/contact">
                    <button className="custom-button-neon m-3 px-9 py-3 text-lg helvetica-medium-font font-medium text-#DBFD67  rounded-lg bg-cover">
                    CONTACT US
                    </button>
                  </Link>
                </div>

            </div>
        </div>
    </div>


    )
}

export default Newshub;