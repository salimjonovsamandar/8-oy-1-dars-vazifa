import React from "react";
import "./index.css";

const PersonalVideoPlayer = ({ videoUrl }) => {
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div className="video_studio">
      <video
        className="video_ref"
        controlsList="nodownload"
        preload="metadata"
        crossOrigin="anonymous"
        controls
        onContextMenu={handleContextMenu}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default PersonalVideoPlayer;
