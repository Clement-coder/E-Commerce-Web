import React from 'react'

const Deliveries = () => {
  return (
    // Delivery images 
    <div className="py-8 px-4 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        <img
          src="/src/assets/delivery.png"
          alt="Fast Delivery"
          className="w-full max-w-[300px] object-contain"
        />
        <img
          src="/src/assets/services.png"
          alt="Customer Services"
          className="w-full max-w-[300px] object-contain"
        />
        <img
          src="/src/assets/guarantee.png"
          alt="Guarantee"
          className="w-full max-w-[300px] object-contain"
        />
      </div>
    </div>
  )
}

export default Deliveries;
