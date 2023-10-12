import React from 'react'
import { useState } from 'react';
import videoImg from '/assets/img/videoImg.png';
import playBtn from '/assets/img/play.png';
import './Video.css'

const Video = () => {
        const [isPlaying, setIsPlaying] = useState(false);
        const handlePlayClick = () => {
            setIsPlaying(true);
          };
  return (
    <div className="video-section">
      {!isPlaying && (
        <div className="thumbnail" onClick={handlePlayClick}>
          <img src={videoImg} alt="Thumbnail" />
          <div className="play-button">
            <img src={playBtn} alt="" />
          </div>
        </div>
      )}

      {isPlaying && (
        <div className="video-container">
          <video
            controls
            autoPlay
            playsInline
            muted
            onEnded={() => setIsPlaying(false)}
            style={{ width: '100%', height: '840px' }}
          >
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  )
}

export default Video