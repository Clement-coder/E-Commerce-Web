import React from "react";
import { ArrowLeft, ArrowRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from "lucide-react";

const Browse = () => {
  const categoriesItems = [
    { label: "Phones", icon: Smartphone },
    { label: "Computers", icon: Monitor },
    { label: "SmartWatch", icon: Watch },
    { label: "Camera", icon: Camera },
    { label: "HeadPhones", icon: Headphones },
    { label: "Gaming", icon: Gamepad },
  ];

  return (
    <div className="py-8 px-4 max-w-screen-xl mx-auto">
    
      <img src="/src/assets/categories.png" alt="Categories Banner" className="" />

      {/* Categories Container */}
      <div className="px-4 py-6 bg-white rounded-lg shadow-sm">
  
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <div>

            <h2 className="text-2xl text-left font-bold">Browse By Category</h2>
          </div>

          {/* Arrows */}
          <div className="flex gap-2 mt-4 md:mt-0">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <ArrowLeft size={18} />
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categoriesItems.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border w-full h-[150px] rounded-md p-4 hover:shadow-md cursor-pointer transition-all"
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
