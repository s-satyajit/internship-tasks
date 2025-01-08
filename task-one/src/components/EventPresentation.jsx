import React from "react";
import Album from "./Album";
import EventAreasList from "./EventAreasList";
import ServicesOffered from "./ServicesOffered";
import YouMayAlsoLike from "./YouMayAlsoLike";

const EventPresentation = () => {
    return (
         <div className="container">
            <div className="flex flex-wrap" >
                <div className="w-full md:w-3/4">
                    <EventAreasList />
                    <ServicesOffered />
                    <Album />
                </div>
                <div className="w-full md:w-1/4">
                    <YouMayAlsoLike />
                </div>
            </div>
         </div>
    )
}

export default EventPresentation;