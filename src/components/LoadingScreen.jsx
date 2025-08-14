import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Hello World";

  useEffect(() => {
    let index = 0;

    const typeLetter = () => {
      setText(fullText.substring(0, index));
      index++;
      if (index <= fullText.length) {
        setTimeout(typeLetter, 150);
      } else {
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    };

    typeLetter();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center px-4">
      
      {/* Text with blinking cursor */}
      <div className="mb-4 font-mono font-bold 
                      text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* Loading bar container */}
      <div className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-[4px] bg-gray-800 rounded overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>

    </div>
  );
};

export default LoadingScreen;
