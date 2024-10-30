import { useEffect, useRef } from 'react';
import badAppleVideo from '../assets/bad-apple.mp4';
import badAppleAudio from '../assets/bad-apple.mp3';

const BadAppleBackground = ({ isPlaying }) => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (isPlaying) {
      // Start both video and audio when isPlaying becomes true
      Promise.all([
        video.play().catch(error => console.log("Video autoplay prevented:", error)),
        audio.play().catch(error => console.log("Audio autoplay prevented:", error))
      ]);
    } else {
      // Pause both when isPlaying is false
      video.pause();
      audio.pause();
    }

    // Sync video and audio
    video.addEventListener('play', () => {
      if (isPlaying) audio.play();
    });

    video.addEventListener('pause', () => {
      audio.pause();
    });

    // Loop both video and audio
    video.addEventListener('ended', () => {
      if (isPlaying) {
        video.play();
        audio.currentTime = 0;
        audio.play();
      }
    });

    return () => {
      video.pause();
      audio.pause();
    };
  }, [isPlaying]);

  return (
    <div className="bad-apple-container">
      <video
        ref={videoRef}
        className="bad-apple-video"
        muted
        playsInline
        loop
      >
        <source src={badAppleVideo} type="video/mp4" />
      </video>
      <audio ref={audioRef} loop>
        <source src={badAppleAudio} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default BadAppleBackground;