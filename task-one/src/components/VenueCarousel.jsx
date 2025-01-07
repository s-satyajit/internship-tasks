import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.css'

import venue1 from "../assets/venues/venue-1.png";
import venue2 from "../assets/venues/venue-2.png";
import venue3 from "../assets/venues/venue-3.png";
import venue4 from "../assets/venues/venue-4.png";
import venue5 from "../assets/venues/venue-5.png";

const VenueCarousel = () => {

    const venues = [
        {
            name: "Sankalp Media & Convention",
            location: "Bhubaneswar",
            rating: 4.5,
            image: venue1,
        },
        {
            name: "Hotel Sambit Royale",
            location: "Bhubaneswar",
            rating: 4.5,
            image: venue2,
        },
        {
            name: "Chancellor Grand",
            location: "Bhubaneswar",
            rating: 4.5,
            image: venue3,
        },
        {
            name: "South City Banquet",
            location: "Bhubaneswar",
            rating: 4.5,
            image: venue4,
        },
        {
            name: "Hotel Bhagaban Villa",
            location: "Bhubaneswar",
            rating: 4.5,
            image: venue5,
        }
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl mb-4 font-bold">You May Also Like</h2>
            <Swiper spaceBetween={10} slidesPerView={1} navigation>
                {venues.map((venue, index) => (
                    <SwiperSlide key={index}>
                        <div className="max-w-sm shadow-lg rounded overflow-hidden">
                            <img className="w-full" src={venue.image} alt={venue.name} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{venue.name}</div>
                                <p className="text-gray-700 text-base">{venue.location}</p>
                                <p className="text-gray-700 text-base">⭐ {venue.rating}</p>
                                <p className="text-gray-700 text-base">{venue.cost}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default VenueCarousel;