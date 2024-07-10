import Image from "next/image";
import Link from "next/link";

const News =()=>{



    return(
        <div id="press" className="w-full flex flex-col items-center bg-black">
        <div className="max-w-[1440px] w-full h-full flex flex-col justify-center slate-400 xl:px-20 xl:py-12 lg:p-12 p-6 gap-4">

            <h2 className="md:text-7xl text-2xl md:mb-24 mb-4 mt-12 text-center font-bold text-white ppFormula-font"><em>NEWS & UPDATES</em></h2>

            <div className="grid md:grid-cols-3 grid-cols-1 justify-center w-full xl:gap-10 md:gap-4 gap-10 mb-8 text-white">

                <div className="flex flex-col  news-container">
                    <Link  href="https://animationxpress.com/games/tanmay-bhat-stars-in-college-rivals-debut-seven-video-marketing-series/" target="_blank">
                    <div className="overflow-hidden">
                    <Image width={400} height={224} src="/Tanmay-Bhat-news.webp" alt="newsImg" className="w-full   h-56 object-cover"/>
                    </div>
                    <div className="flex flex-col xl:gap-3 gap-2 py-5">
                        <h3 className="xl:text-2xl text-xl helvetica-light-font ">Tanmay Bhat stars in College Rivals’ debut seven-video marketing series</h3>
                        <p className="text-base xl:font-normal font-light helvetica-extralight-font opacity-70 ">Ampverse DMI’s collegiate esports IP, College Rivals, is set to introduce its seven-video marketing series. This series showcases a fusion of gaming, music, and pop culture.</p>
                    </div>
                    </Link>
                </div>
               
                

              

                <div className="flex flex-col  news-container ">
                <Link href="https://www.indiatodaygaming.com/story/college-rivals-grand-finale-creates-history-for-indian-esports-bgmi-finalist-gets-professional-contract-with-rival-pro-esports-3847" target="_blank">
                <div className="overflow-hidden">
                    <Image width={400} height={224}  src="/vayam-bhatt-news.webp" alt="newsImg" className="w-full h-56 object-cover"/>
                    </div>
                    <div className="flex flex-col xl:gap-3 gap-2 py-5">
                        <h3 className="xl:text-2xl text-xl helvetica-extralight-font  ">College Rivals Grand Finale Creates History for Indian Esports; BGMI Finalist Gets Professional Contract with Rival Pro Esports</h3>
                        <p className="text-base xl:font-normal  opacity-70 ">India’s largest Esports talent hunt witnessed a total prize pool of INR 50 lakhs as...</p>
                    </div>
                    </Link>
                </div>
                <div className="flex flex-col  news-container ">
                <Link href="https://in.ign.com/esports/202375/news/college-rivals-hosts-flash-mobs-in-mumbai-ahead-of-its-esports-grand-finale" target="_blank">
                <div className="overflow-hidden">
                    <Image width={400} height={224}  src="/IGN-news.webp" alt="newsImg" className="w-full h-56 object-cover"/>
                    </div>
                    <div className="flex flex-col xl:gap-3 gap-2 py-5">
                        <h3 className="xl:text-2xl text-xl helvetica-extralight-font  ">College Rivals Hosts Flash Mobs in Mumbai Ahead of Its Esports Grand Finale Along With Free Ticket Giveaways</h3>
                        <p className="text-base xl:font-normal  opacity-70 ">Even though there are some prolific and accomplished esports players in India, the esports industry itself is still a growing venture...</p>
                    </div>
                    </Link>
                </div>
                <div className="flex flex-col  news-container ">
                <Link href="https://www.cnbctv18.com/sports/college-rivals-grand-finale-bgmi-finalist-gets-professional-contract-with-rival-pro-e-sports-19199201.htm" target="_blank">
                <div className="overflow-hidden">
                    <Image width={400} height={224}  src="/divyansh-vashisht-news.webp" alt="newsImg" className="w-full h-56 object-cover"/>
                    </div>
                    <div className="flex flex-col xl:gap-3 gap-2 py-5">
                        <h3 className="xl:text-2xl text-xl helvetica-extralight-font  ">College Rivals Grand Finale: BGMI finalist gets professional contract with Rival Pro E-sports</h3>
                        <p className="text-base xl:font-normal  opacity-70 ">College Rivals, India's largest E-sports talent hunt, culminated in a remarkable fashion by not only crowning champions...</p>
                    </div>
                    </Link>
                </div>
                <div className="flex flex-col  news-container ">
                <Link href="https://www.insidesport.in/bgmi/college-rivals-season-2-kicks-off-registration-opens-july-4/" target="_blank">
                <div className="overflow-hidden">
                    <Image width={400} height={224}  src="/news-college-rivalss2.jpg" alt="newsImg" className="w-full h-56 object-cover"/>
                    </div>
                    <div className="flex flex-col xl:gap-3 gap-2 py-5">
                        <h3 className="xl:text-2xl text-xl helvetica-extralight-font  ">College Rivals Season 2 kicks off, registration opens July 4</h3>
                        <p className="text-base xl:font-normal  opacity-70 ">Ampverse DMI launched the highly anticipated second season of its innovative gaming talent hunt, “College Rivals.”...</p>
                    </div>
                    </Link>
                </div>
                <div className="flex flex-col  news-container ">
                <Link href="https://www.insidesport.in/bgmi/college-rivals-season-2-kicks-off-registration-opens-july-4/" target="_blank">
                <div className="overflow-hidden">
                    <Image width={400} height={224}  src="/news-amp-dmi.png" alt="newsImg" className="w-full h-56 object-cover"/>
                    </div>
                    <div className="flex flex-col xl:gap-3 gap-2 py-5">
                        <h3 className="xl:text-2xl text-xl helvetica-extralight-font  ">Ampverse DMI sets ambitious roadmap for the Indian gaming sector</h3>
                        <p className="text-base xl:font-normal  opacity-70 ">Ampverse DMI, a joint venture between Ampverse Group,(“Ampverse”) an eminent gaming and entertainment ecosystem...</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default News;