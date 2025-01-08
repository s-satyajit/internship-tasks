import React, { useState } from "react";

import venue1 from "../assets/venues/venue-1.png";
import venue2 from "../assets/venues/venue-2.png";
import venue3 from "../assets/venues/venue-3.png";
import venue4 from "../assets/venues/venue-4.png";
import venue5 from "../assets/venues/venue-5.png";

const VenueCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const venues = [
    { name: "Sankalp Media & Convention", location: "Bhubaneswar", rating: 4.5, image: venue1 },
    { name: "Hotel Sambit Royale", location: "Bhubaneswar", rating: 4.5, image: venue2 },
    { name: "Chancellor Grand", location: "Bhubaneswar", rating: 4.5, image: venue3 },
    { name: "South City Banquet", location: "Bhubaneswar", rating: 4.5, image: venue4 },
    { name: "Hotel Bhagaban Villa", location: "Bhubaneswar", rating: 4.5, image: venue5 },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? venues.length - 3 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === venues.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl mb-4 font-bold">You May Also Like</h2>
      <div className="relative">
        <div className="flex justify-center items-center">
          <button onClick={prevSlide} className="absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full">
            &#10094;
          </button>
          <div className="flex space-x-4">
            {venues.slice(currentIndex, currentIndex + 3).map((venue, index) => (
              <div key={index} className="max-w-sm shadow-lg rounded overflow-hidden">
                <img className="w-full" src={venue.image} alt={venue.name} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{venue.name}</div>
                  <p className="text-gray-700 text-base">{venue.location}</p>
                  <p className="text-gray-700 text-base">⭐ {venue.rating}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={nextSlide} className="absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full">
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default VenueCarousel;