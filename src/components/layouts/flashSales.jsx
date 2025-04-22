import React, { useEffect, useState } from 'react';

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState(2 * 24 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => String(time).padStart(2, '0');

  const days = formatTime(Math.floor(timeLeft / (60 * 60 * 24)));
  const hours = formatTime(Math.floor((timeLeft % (60 * 60 * 24)) / 3600));
  const minutes = formatTime(Math.floor((timeLeft % 3600) / 60));
  const seconds = formatTime(timeLeft % 60);

  return (
    <div className="py-8 px-4 max-w-screen-xl mx-auto">
      {/* Image */}
      <div className="mb-10">
        <img 
          src="/src/assets/today.png" 
          alt="Flash Sales"
          className=""
        />
      </div>

    
      <div className="flex flex-col md:flex-row items-center gap-8 text-gray-800">
        
        {/* Title */}
        <h2 className="font-bold text-center text-2xl md:text-4xl lg:text-5xl text-black">
          Flash Sales 
        </h2>

        {/* Timer */}
        <div className="flex flex-col items-center">
      
          <div className="flex justify-center gap-16 text-xs md:text-sm font-medium mb-2">
            <span className="text-black">Days</span>
            <span className="text-black">Hours</span>
            <span className="text-black">Minutes</span>
            <span className="text-black">Seconds</span>
          </div>

          {/* Time Numbers */}
          <div className="flex justify-center gap-3 md:gap-4 text-2xl md:text-4xl lg:text-6xl font-bold">
            <div>{days}</div>
            <div>:</div>
            <div>{hours}</div>
            <div>:</div>
            <div>{minutes}</div>
            <div>:</div>
            <div>{seconds}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
