import React from "react";
import EventAreasList from "./EventAreasList";
import EventAreaCard from "./EventAreaCard";
import ServicesOffered from "./ServicesOffered";
import Album from "./Album";
import YouMayAlsoLike from "./YouMayAlsoLike";

const EventPresentation = () => {
    return (
        <div className="container px-4 py-8 ml-36">
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