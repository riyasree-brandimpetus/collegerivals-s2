"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import lottieData from "@/constants/lottie/lottie"; // Adjust the path as needed

const LottieAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed
  });
  const [isVisible, setIsVisible] = useState(false);
  const [currentLottie, setCurrentLottie] = useState<any>(null); // Track the current Lottie animation
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    // Get the current date and time as a Date object
    const now = new Date();

    // Find the correct Lottie based on the current date
    const selectedLottie = lottieData.find((entry) => {
      const endDate = new Date(entry.endDate);
      return now < endDate; // Compare Date objects instead of strings
    });

    // If a valid Lottie file is found, set it as the current one
    if (selectedLottie) {
      import(`../../constants/lottie${selectedLottie.lottiePath}`)
        .then((module) => {
          setCurrentLottie(module.default);
        })
        .catch((error) => {
          console.error("Error loading Lottie file:", error);
        });
    }
  }, []);

  useEffect(() => {
    if (inView && currentLottie) {
      setIsVisible(true);
      if (lottieRef.current) {
        const duration = lottieRef.current.getDuration(true) ?? 0;
        lottieRef.current.playSegments([0, duration], true);
      }
    }
  }, [inView, currentLottie]);

  return (
    <div ref={ref}>
      {isVisible && currentLottie && (
        <Lottie
          lottieRef={lottieRef}
          animationData={currentLottie}
          loop={false}
        />
      )}
    </div>
  );
};

export default LottieAnimation;
