import React from 'react';

const Collections = () => {
  return (
    <div className="py-8 max-w-screen-xl mx-auto px-4 space-y-6">
      {/*  Banner */}
      <img
        src="/src/assets/arival.png"
        alt="New Arrival"
        className=""
      />

     
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Item */}
        <img
          src="/src/assets/playstation.png"
          alt="Playstation"
          className="w-full lg:w-1/2 object-cover rounded"
        />

        {/* Right Grid */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <img
            src="/src/assets/collections.png"
            alt="Collections"
            className="w-full object-cover rounded"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="/src/assets/speakers.png"
              alt="Speakers"
              className="w-full object-cover rounded"
            />
            <img
              src="/src/assets/perfume.png"
              alt="Speakers"
              className="w-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
