import React, { useEffect, useState } from 'react';
import { Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion'; 

const BestSellings = () => {
  const [products, setProducts] = useState([]);
  const [likes, setLikes] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        const selectedProducts = data.slice(16, 20);
        setProducts(selectedProducts);

        const initialLikes = {};
        selectedProducts.forEach(product => {
          initialLikes[product.id] = false;
        });
        setLikes(initialLikes);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const toggleLike = (id) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };

  return (
    <div className="py-8 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      
      {/* Top section */}
      <div className="flex flex-col lg:justify-between md:flex-row justify-start items-start mb-8 gap-4">
  <div className="text-left">
    <img src="/src/assets/month.png" alt="Best of the Month" className="w-32 md:w-40" />
    <h1 className="text-2xl md:text-3xl font-bold py-4">Best Selling Products</h1>
  </div>
  <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 text-sm md:text-base">
    View All
  </button>
</div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between h-full"
          >
            {/* Like button */}
            <div className="flex justify-end">
              <motion.div
                whileTap={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer"
                onClick={() => toggleLike(product.id)}
                title="Add to Wishlist ❤️"
              >
                <Heart
                  size={22}
                  fill={likes[product.id] ? 'red' : 'none'}
                  color={likes[product.id] ? 'red' : 'gray'}
                />
              </motion.div>
            </div>

            {/* Product image */}
            <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain mt-2" />

            {/* Product details */}
            <div className="mt-4 space-y-2 text-center md:text-left">
              <h3 className="text-sm md:text-base font-semibold line-clamp-2">{product.title}</h3>

              {/* Ratings stars */}
              <div className="flex justify-center md:justify-start items-center text-yellow-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.round(product.rating.rate) ? '#FBBF24' : 'none'}
                  />
                ))}
                <span className="ml-1 text-gray-500 text-xs">({product.rating.count})</span>
              </div>

              {/* Price */}
              <div className="text-sm md:text-base font-bold text-gray-900">
                ${product.price}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellings;
