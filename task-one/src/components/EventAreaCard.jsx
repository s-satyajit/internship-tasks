import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const EventAreaCard = ({ area }) => {
  return (
    <Card className="shadow-lg my-4">
      <CardContent>
        <Typography variant="h6" component="div" className="font-bold">
          {area.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-2">
          {area.type}
        </Typography>
        <Typography variant="body2" className="mt-2">
          {area.SeatingCapacity} Seating
        </Typography>
        <Typography variant="body2" className="mt-2">
          {area.floatingCapacity} Floating
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventAreaCard;
