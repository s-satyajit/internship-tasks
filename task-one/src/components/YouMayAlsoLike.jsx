import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import venue1img from "../assets/venues/venue-1.png";
import venue2img from "../assets/venues/venue-2.png";
import venue3img from "../assets/venues/venue-3.png";
import venue4img from "../assets/venues/venue-4.png";
import venue5img from "../assets/venues/venue-5.png";

const recommendations = [
  {
    name: "Sankalp Media and Convention",
    location: "Bhubaneswar",
    rating: "4.5",
    cost: "₹1",
    image: venue1img,
  },
  {
    name: "Narayana Celebrations Hall 1",
    location: "Bhubaneswar",
    rating: "4.5",
    cost: "₹599 - ₹699",
    image: venue2img,
  },
  {
    name: "Abhinandan Mandap Lodge",
    location: "Bhubaneswar",
    rating: "4.5",
    cost: "₹600 - ₹750",
    image: venue3img,
  },
  {
    name: "Hotel Bhagaban Villa",
    location: "Bhubaneswar",
    rating: "4.5",
    cost: "₹1,20,000",
    image: venue4img,
  },
  {
    name: "Sai Kalyan Mandap",
    location: "Bhubaneswar",
    rating: "4.5",
    cost: "₹60,000",
    image: venue5img,
  },
];

const YouMayAlsoLike = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" className="my-4 font-bold">
        You May Also Like
      </Typography>
      <Grid container spacing={2}>
        {recommendations.map((item, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  height="140"
                  rating={item.rating}
                  cost={item.cost}
                  venue={item.location}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating: {item.rating}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cost: {item.cost}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default YouMayAlsoLike;
