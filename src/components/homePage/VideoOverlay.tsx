import React from "react";
// import Iframe from "react-iframe";

interface VideoOverlayProps {
  videoSrc: string;
  onClose: () => void;
}

function VideoOverlay({ videoSrc, onClose }: VideoOverlayProps) {

  const isYouTubeVideo = videoSrc.includes("youtube");
  console.log(videoSrc)
  return (
    <div className="overlay fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[100] bg-black bg-opacity-">
      <button
        className="back-button absolute top-5% left-5% z-[101] ppFormula-font text-5xl italic tracking-[0.3rem] text-white uppercase"
        onClick={onClose}
      >
        Back
      </button>
      <video
        className="full-screen-video w-screen h-screen"
        src={videoSrc}
        autoPlay
        controls
        loop
      />
      {/* {isYouTubeVideo ? (
        <Iframe
          url={videoSrc}
        />
      ) : (
        <video
          className="full-screen-video w-screen h-screen"
          src={videoSrc}
          autoPlay
          controls
          loop
        />
      )} */}
    </div>
  );
}

export default VideoOverlay;
