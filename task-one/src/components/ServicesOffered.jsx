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
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" className="my-4 font-bold">
        Services Offered
      </Typography>
      {services.map((service, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{service.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{service.price}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Container>
  );
};

export default ServicesOffered;
