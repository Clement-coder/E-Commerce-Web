import React, { useEffect, useState } from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { Heart } from 'lucide-react';
import { motion } from "framer-motion";

const ProductCard = ({ product, index }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg-white border py-8 px-4 max-w-screen-xl rounded-lg shadow-sm w-full sm:w-60 relative">
      {/* Sale Badge */}
      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-20%</span>

     
      <div className="absolute top-2 right-2 space-y-2 text-gray-600">
        <motion.div
          whileTap={{ scale: 1.5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="cursor-pointer"
          onClick={toggleLike}
        
        >
          <Heart size={20} 
          fill = {liked ? "red" : "white"}
          color={liked ? "red" : "gray"} />
        </motion.div>

        <div className="cursor-pointer">
          <FaEye size={18} />
        </div>
      </div>

      {/* Product Image */}
      <img src={product.image} alt={product.title} className="mx-auto h-32 object-contain" />


      {index === 1 && (
        <button className="mt-4 w-full bg-black text-white py-2 text-sm rounded hover:bg-gray-800 transition">
          Add To Cart
        </button>
      )}

      {/* Product Title */}
      <h3 className="mt-4 text-base font-semibold text-gray-800 text-center">{product.title}</h3>

      {/* Pricin */}
      <div className="flex justify-center items-center space-x-2 mt-2 text-sm">
        <span className="text-red-600 font-semibold">${product.price}</span>
        <span className="line-through text-gray-400">${(product.price * 1.2).toFixed(2)}</span>
      </div>

      {/* Rating */}
      <div className="flex justify-center items-center space-x-1 mt-2 text-yellow-500 text-xs">
        {Array(Math.round(product.rating?.rate || 0))
          .fill()
          .map((_, i) => (
            <FaStar key={i} />
          ))}
        <span className="text-gray-600 ml-2">({product.rating?.count || 0})</span>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=5");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      <div className="py-11 text-center border-b-2 px-4 max-w-screen-xl mx-auto">
        <button className="bg-red-500 text-white text-md rounded py-3 px-8 hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </>
  );
};

export default ProductList;
