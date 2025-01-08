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
    <div className="">
      <h2 className="text-lg font-bold" >3 Event Areas Available</h2>
      {eventAreas.map((area, index) => {
        return <EventAreaCard key={index} area={area} />;
      })}
    </div>
  );
};

export default EventAreasList;