import React from "react";
import venue1img from "../assets/venues/venue-1.png";
import venue2img from "../assets/venues/venue-2.png";
import venue3img from "../assets/venues/venue-3.png";
import venue4img from "../assets/venues/venue-4.png";
import venue5img from "../assets/venues/venue-5.png";

const recommendations = [
  {
    name: "Sankalp Media and Convention",
    location: "Bhubaneswar",
    rating: "4.5",
    cost: "₹1",
    image: venue1img,
  },
  {
    name: "Narayana Celebrations Hall 1",
    location: "Bhubaneswar",
    rating: "4.5",
    cost: "₹599 - ₹699",
    image: venue2img,
  },
  {
    name: "Abhinandan Mandap Lodge",
    location: "Bhubaneswar",
    rating: "4.5",
    cost: "₹600 - ₹750",
    image: venue3img,
  },
  {
    name: "Hotel Bhagaban Villa",
    location: "Bhubaneswar",
    rating: "4.5",
    cost: "₹1,20,000",
    image: venue4img,
  },
  {
    name: "Sai Kalyan Mandap",
    location: "Bhubaneswar",
    rating: "4.5",
    cost: "₹60,000",
    image: venue5img,
  },
];

const YouMayAlsoLike = () => {
  return (
    <div className="my-8">
      <h2 className="my-4 text-3xl font-bold">You May Also Like</h2>
      <div className="" >
        {recommendations.map((recommendation, index) => (
          <div key={index} className="border rounded-lg my-4">
            <div className="m-4 flex justify-between" >
              <img
                src={recommendation.image}
                alt="venue name"
                className=" h-28 w-28 rounded-lg mx-2 "
                />
              <div className="mx-2" >
                <div className="text-sm " >⭐{recommendation.rating}</div>
                <div className="text-sm font-bold" >{recommendation.name}</div>
                <div className="text-xs " >{recommendation.location}</div>
                <div className="text-sm font-bold " >{recommendation.cost}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
