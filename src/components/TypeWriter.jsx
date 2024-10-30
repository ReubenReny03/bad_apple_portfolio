import { useState, useEffect } from 'react';

const TypeWriter = ({ className, onTextClick }) => {
  const [text, setText] = useState("Do not click me");
  const [displayText, setDisplayText] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    let currentText = text;

    const typeText = () => {
      if (index < currentText.length) {
        setDisplayText(prev => prev + currentText.charAt(index));
        index++;
        setTimeout(typeText, 100);
      } else {
        setIsTyping(false);
      }
    };

    typeText();

    return () => {
      index = currentText.length;
    };
  }, [text]);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      setIsTyping(true);
      setDisplayText("");
      setText("now enjoy the music");
      
      // Call the parent's callback to handle media playback
      if (onTextClick) {
        onTextClick();
      }
    }
  };

  return (
    <div 
      className={`typewriter ${className} ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
      style={{ cursor: isClicked ? 'default' : 'pointer' }}
    >
      {displayText}
      {isTyping && <span className="cursor">|</span>}
    </div>
  );
};

export default TypeWriter; 