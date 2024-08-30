"use client";
import { useEffect } from "react";

const InstaSection = () => {
  useEffect(() => {
    // Load the LightWidget script
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="flex justify-center items-center w-full bg-[#1B191A] pt-9 pb-3  md:pt-20 md:pb-28">
      <div className="w-full flex flex-col justify-center items-center max-w-[1440px] px-5">
        <h2 className="uppercase text-2xl md:text-6xl text-white italic ppFormula-font">
          Follow us on <span className="text-#E7327C">insta</span>
        </h2>
        <div className="w-full md:w-[85%] pt-6 md:pt-16">
          <iframe
            src="//lightwidget.com/widgets/f55700f94a9256089e2d328c439d73e0.html"
            scrolling="no"
            allowTransparency
            className="lightwidget-widget"
            style={{ width: "100%", border: 0, overflow: "hidden" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default InstaSection;
