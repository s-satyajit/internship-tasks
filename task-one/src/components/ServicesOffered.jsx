import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";

const services = [
  {
    title: "Veg Pricing",
    price: 400,
  },
  {
    title: "Non-Veg Pricing",
    price: 600,
  },
];

const ServicesOffered = () => {
  return (
    <div className="mr-10 my-8" >
      <div className="mx-4 font-bold text-3xl my-4">Services Offered</div>
      <div className="" >
        {services.map((service, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>{service.title}</div>
            </AccordionSummary>
            <AccordionDetails>
              <div>{service.price}</div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default ServicesOffered;
