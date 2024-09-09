"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "@/constants/lottie/Delhi.json";

const LottieAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed
  });
  const [isVisible, setIsVisible] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      if (lottieRef.current) {
        const duration = lottieRef.current.getDuration(true) ?? 0;
        lottieRef.current.playSegments([0, duration], true);
      }
    }
  }, [inView]);

  return (
    <div ref={ref}>
      {isVisible && (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
        />
      )}
    </div>
  );
};

export default LottieAnimation;
