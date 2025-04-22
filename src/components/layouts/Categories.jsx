import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  'Electronics',
  'Home & Lifestyle',
  'Medicine',
  'Sports & Outdoor',
  "Baby's & Toys",
  'Groceries & Pets',
  'Health & Beauty',
];

const CategoryMenu = () => {
  return (
    <div className='flex flex-col md:flex-row py-4 px-6 max-w-screen-xl mx-auto gap-4 pt-10'>
      

      <div className="w-full md:w-1/3 bg-white  text-gray-800 border-r-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-2 py-2 text-lg hover:text-red-500 hover:bg-gray-100 rounded cursor-pointer transition-all"
          >
            <span>{category}</span>
            {(category.includes("Fashion")) && <FaChevronRight size={12} />}
          </div>
        ))}
      </div>

      <div className="w-full md:w-2/3">
        <img
          className="w-full lg:h-96 md:h-auto rounded shadow"
          src="/src/assets/Frame 560.png"
          alt="Promo"
        />
      </div>
    </div>
  );
};

export default CategoryMenu;
