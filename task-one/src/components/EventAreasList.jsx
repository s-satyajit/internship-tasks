import React from "react";
import { Container, Typography } from "@mui/material";
import EventAreaCard from "./EventAreaCard";

const eventAreas = [
  {
    name: "Pavilion Banquet Hall",
    type: "Indoor",
    seatingCapacity: 200,
    floatingCapacity: 250,
  },
  {
    name: "Pavilion Banquet Hall 1",
    type: "Indoor",
    seatingCapacity: 250,
    floatingCapacity: 250,
  },
  {
    name: "Pavilion Party Hall",
    type: "Indoor",
    seatingCapacity: 125,
    floatingCapacity: 150,
  },
];

const EventAreasList = () => {
  return (
    <div className="my-8 ">
      <h2 className="text-3xl ml-4 font-bold ">3 Event Areas Available</h2>
      <div className="flex flex-row" >
        {eventAreas.map((area, index) => {
          return <EventAreaCard key={index} area={area} />;
        })}
      </div>
    </div>
  );
};

export default EventAreasList;
