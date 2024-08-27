"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import axios from "axios";

const LottieAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [animationData, setAnimationData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const fetchLottieData = async () => {
      try {
        const response = await axios.get("/api/lottie");
        setAnimationData(response.data);
      } catch (error) {
        console.error("Failed to fetch Lottie data:", error);
      }
    };

    fetchLottieData();
  }, []);

  useEffect(() => {
    if (inView && animationData && lottieRef.current) {
      setIsVisible(true);
      const duration = lottieRef.current.getDuration(true) ?? 0;
      lottieRef.current.playSegments([0, duration], true);
    }
  }, [inView, animationData]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-full h-full flex items-center justify-center md:px-16"
        ref={ref}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
        />
      </div>
    </div>
  );
};

export default LottieAnimation;
