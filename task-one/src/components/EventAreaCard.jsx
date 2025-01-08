import React from "react";

const EventAreaCard = ({ area }) => {
  return (
    <div className="border m-4 p-4 rounded-lg shadow-sm max-w-xs flex-wrap flex-auto " >
          <h2 className="text-lg font-bold" >{area.name}</h2>
          <div className="flex justify-between ">
          <span>{area.type}</span>
          <span>{area.seatingCapacity}</span>
          <span>{area.floatingCapacity}</span>
          </div>
    </div>
  );
};

export default EventAreaCard;
