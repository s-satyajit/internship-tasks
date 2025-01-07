import React from "react";
import album1 from "../assets/albums/album-1.png";
import album2 from "../assets/albums/album-2.png";
import album3 from "../assets/albums/album-3.png";
import album4 from "../assets/albums/album-4.png";
import album5 from "../assets/albums/album-5.png";
import album6 from "../assets/albums/album-6.png";
import album7 from "../assets/albums/album-7.png";
import album8 from "../assets/albums/album-8.png";
import {
  CardContent,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";

const albums = [
  { name: "Album 1", image: album1 },
  { name: "Album 2", image: album2 },
  { name: "Album 3", image: album3 },
  { name: "Album 4", image: album4 },
  { name: "Album 5", image: album5 },
  { name: "Album 6", image: album6 },
  { name: "Album 7", image: album7 },
  { name: "Album 8", image: album8 },
];

const Album = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" className="my-4 font-bold">
        Albums
      </Typography>
      <Grid container spacing={2}>
        {albums.map((album, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={album.image}
                  alt={album.name}
                />
                <CardContent>
                  <Typography variant="subtitle-1" className="text-center">
                    {album.name}
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

export default Album;
