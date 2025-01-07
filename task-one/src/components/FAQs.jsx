import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQs() {
  const faqs = [
    {
      summary: "How many guest can Pavillion Accomodate",
      details:
        "200 guests in seated arrangements, 250 guests in a floating setup",
    },
    {
      summary: "What are the parking facilities at the Pavilion",
      details: "They have a capacity of 100 Bike Parking, 50 Car Parking",
    },
    {
      summary: "What type of food Pavilion offer? Veg or Non-veg?",
      details: "Both",
    },
    {
      summary: "Is outside food allowed at Pavillion venue?",
      details: "N/A",
    },
    {
      summary: "How many event areas does Pavilion have?",
      details: "No of event area available: 3",
    },
    {
      summary: "Is outside decor allowed at Pavilion venue?",
      details: "Outside decorators not allowed",
    },
  ];

  return (
    <div>
      {faqs.map((faq, index) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">{faq.summary}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {faq.details}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
