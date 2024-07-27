"use client"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from "react";
const WelcomeSlider =()=>{

    const sliderRef = useRef<Slider | null>(null);

    const slidesettings = {
        dots: true,
            infinite: false,
            speed: 300,
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows:false,

      };



    return(
        <div className="w-full bg-black flex justify-center pb-28">
        <div
            className="max-w-[1440px] w-full h-full rounded-xl relative justify-center md:p-87 p-6">
            

            <div className="xl:px-48 md:px-10 px-7 pb-20 relative flex flex-col justify-center place-items-center">
                <img src="./assets/tl.svg" alt="" className="absolute top-0 left-0"/>
                <img src="./assets/tr.svg" alt="" className="absolute top-0 right-0"/>
                <img src="./assets/bl.svg" alt="" className="absolute bottom-0 left-0"/>
                <img src="./assets/br.svg" alt="" className="absolute bottom-0 right-0"/>
                <img src="/logo-2.svg" alt="" className="md:w-16 w-12 md:mb-14 mb-7"/>

                <div className="slider w-full">
                  
                    <div>
                        <p className="text-white text-center md:text-2xl text-lg font-light helvetica-extralight-font">College Rivals is the bridge between a College Student's passion for Gaming and their aspiration to be a pro player. Positioned as India's Largest Esports Talent Hunt, it combines music, pop culture, and comedy putting together a unique cross between gaming and Entertainment, in an unprecedented format. An innovative esports initiative developed in collaboration between Ampverse and DMI. It aims to nurture gaming talent at the collegiate level across India through competitive tournaments, mentorship, and community engagement. It goes beyond esports tournaments by incorporating elements of college life, pop culture trends, and influencer engagements</p>
                    </div>
                   
             
                </div>
            </div>
        </div>
    </div>

    )
}
export default WelcomeSlider