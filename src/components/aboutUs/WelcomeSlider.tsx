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
        <div className="w-full bg-black flex justify-center">
        <div
            className="max-w-[1440px] w-full h-full rounded-xl relative justify-center md:p-87 p-6">
            

            <div className="xl:px-64 md:px-10 px-7 relative flex flex-col justify-center place-items-center">
                <img src="./assets/tl.svg" alt="" className="absolute top-0 left-0"/>
                <img src="./assets/tr.svg" alt="" className="absolute top-0 right-0"/>
                <img src="./assets/bl.svg" alt="" className="absolute bottom-0 left-0"/>
                <img src="./assets/br.svg" alt="" className="absolute bottom-0 right-0"/>
                <img src="/logo-2.svg" alt="" className="md:w-16 w-12 md:mb-14 mb-7"/>

                <div className="slider w-full">
                    <Slider 
                        ref={sliderRef}
                    {...slidesettings }>
                    <div>
                        <p className="text-white text-center md:text-2xl text-lg font-light">Welcome to College Rivals 2023! We’re on a mission to bring college
                            students together through intense Esports competition. <span className="text-[#DBFD67]">Bringing together the finest gamers</span>
                            from the top colleges across Mumbai, Delhi, Pune, Hyderabad, and Bangalore.</p>
                    </div>
                    <div>
                        <p className="text-white text-center md:text-2xl text-lg font-light">Welcome to College Rivals 2023! We’re on a mission to bring college
                            students together through intense Esports competition. Bringing together the finest gamers
                            from the top colleges across Mumbai, Delhi, Pune, Hyderabad, and Bangalore.</p>
                    </div>
                    </Slider>
                </div>
            </div>
        </div>
    </div>

    )
}
export default WelcomeSlider