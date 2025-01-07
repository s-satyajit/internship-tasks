import React from "react";
import venueCardImg from "../assets/venue-card.png";

const VenueCard = () => {
  return (
    <div className="m-4 p-4 bg-white shadow-lg rounded-lg flex mx-40 justify-center">
      <div className="w-1/2 ml-10">
        <img
          src={venueCardImg}
          alt="Venue"
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>
      <div className="w-1/2 p-4 flex justify-between ml-10 py-25">
        <div>
          <h5 className="text-xl font-bold mb-2">Pavillion, Bhubaneswar</h5>
          <p className="text-gray-600 mb-2">
            439/1954, Nandankanan Rd, Raghunathpur, Bhubaneswar, Odisha 754005
          </p>
          <p className="text-gray-800 mb-2">⭐ 4.5 - No reviews yet</p>
          <p className="text-gray-800">Cost per plate: 400 - 600</p>
        <div className="mt-4 flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Check Availability
          </button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
            View Contact Details
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;