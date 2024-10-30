import { useState, useEffect } from 'react';

const RotatingTitles = () => {
  const titles = [
    "Software Engineer",
    "DevOps Engineer",
    "Python Scripter",
    "Problem Solver",
    "Java Developer",
    "Full Stack Developer"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      setFade(false); // Start fade out
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFade(true); // Fade in new text
      }, 500); // Wait for fade out to complete

    }, 3000); // Change text every 3 seconds

    return () => clearInterval(fadeTimeout);
  }, []);

  return (
    <p className={`title rotating-title ${fade ? 'fade-in' : 'fade-out'}`}>
      {titles[currentIndex]}
    </p>
  );
};

export default RotatingTitles; 