import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from "lucide-react";

const Browse = () => {
  const scrollRef = useRef(); // 🌀 This gives us access to the scroll container

  const categoriesItems = [
    { label: "Phones", icon: Smartphone },
    { label: "Computers", icon: Monitor },
    { label: "SmartWatch", icon: Watch },
    { label: "Camera", icon: Camera },
    { label: "HeadPhones", icon: Headphones },
    { label: "Gaming", icon: Gamepad },
    { label: "More Phones", icon: Smartphone },
    { label: "More Gaming", icon: Gamepad },
  ];

  // ⬅️ Scroll Left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  // ➡️ Scroll Right
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-8 px-4 max-w-screen-xl mx-auto">
      <img src="/src/assets/categories.png" alt="Categories Banner" className="" />

      <div className="px-4 py-6 bg-white rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <h2 className="text-2xl font-bold text-left">Browse By Category</h2>

          {/* Arrows */}
          <div className="flex gap-2 mt-4 md:mt-0">
            <button onClick={scrollLeft} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <ArrowLeft size={18} />
            </button>
            <button onClick={scrollRight} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Category Items */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
        >
          {categoriesItems.map((cat, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center justify-center border w-[160px] h-[150px] rounded-md p-4 hover:shadow-md cursor-pointer transition-all"
            >
              <cat.icon size={32} className="mb-2 text-gray-800" />
              <span className="text-sm font-medium">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
