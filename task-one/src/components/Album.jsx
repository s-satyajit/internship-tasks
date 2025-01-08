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
    <div className="my-6" >
      <div className="text-3xl font-bold ml-4 my-2">Albums</div>
      <div className="flex flex-wrap">
        {albums.map((album, index) => (
          <img
            src={album.image}
            alt={album.name}
            className="w-56 rounded-lg m-5"
          />
        ))}
      </div>
    </div>
  );
};

export default Album;
