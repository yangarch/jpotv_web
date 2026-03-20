import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

import "./HlsPlayer.css";

const HlsPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!src || typeof src !== "string") return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.muted = true;
        videoRef.current.play();
      });
      return () => hls.destroy();
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = src;
      videoRef.current.muted = true;
      videoRef.current.addEventListener("loadedmetadata", () => {
        videoRef.current.play();
      });
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      muted
      autoPlay
      style={{ width: "100%", height: "auto", padding: 0 }}
    />
  );
};

export default HlsPlayer;
