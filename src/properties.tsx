import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Chip,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import Slider from "react-slick";

import home from "../src/assets/image/home.jpg";
import home2 from "../src/assets/image/images.webp";
import ShowerIcon from "@mui/icons-material/Shower";
import BedIcon from "@mui/icons-material/Bed";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Style } from "./properties.style";

const properties = [
  {
    id: 1,
    type: "For Sale",
    featured: true,
    title: "Villa de 1700 m² à vendre sur SQ",
    price: "24,000,000",
    currency: "MAD",
    beds: 7,
    baths: 5,
    area: "1700 m2",
    image: [home, home2],
  },
  {
    id: 2,
    type: "For Sale",
    featured: true,
    title: "Villa de 1700 m² à vendre sur SO",
    price: "24,000,000",
    currency: "MAD",
    beds: 7,
    baths: 5,
    area: "1700 m2",
    image: [home, home2],
  },
  {
    id: 3,
    type: "For Rent",
    featured: true,
    title: "Villa meublé sécurisée à l'entrée",
    price: "29,500",
    currency: "MAD/mois",
    beds: 4,
    baths: 3,
    area: "310 m2",
    image: [home, home2],
  },
  {
    id: 4,
    type: "For Rent",
    title: "Villa neuve moderne avec piscine",
    price: "33,000",
    currency: "MAD/mois",
    beds: 4,
    baths: 2,
    area: "380 m2",
    image: [home, home2],
  },
  {
    id: 5,
    type: "For Rent",
    title: "Location longue durée petite villa",
    price: "14,500",
    currency: "MAD/mois",
    beds: 2,
    baths: 1,
    area: "350 m2",
    image: [home, home2],
  },
  {
    id: 6,
    type: "For Rent",
    title: "Villa de luxe, meublée 3 chambres",
    price: "22,000",
    currency: "MAD/mois",
    beds: 3,
    baths: 2,
    area: "190 m2",
    image: [home, home2],
  },
];

function PropertiesPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <Grid container spacing={3}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <Card sx={Style.card}>
              <Box
                sx={{
                  height: 300,
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${property.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition:
                      "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    transition: "background-color 0.3s ease-in-out",
                  },
                  "&:hover::before": {
                    transform: "scale(1.1)",
                  },
                  "&:hover::after": {
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <Box sx={Style.Box.Arrow}>
                  {/* <ArrowBackIosNewIcon sx={Style.ArrowIcone} />
                  <ArrowForwardIosIcon sx={Style.ArrowIcone} /> */}
                  <Slider {...settings}>
                    {property.image.map((img: any, index: any) => (
                      <Box
                        key={index}
                        component="img"
                        src={img}
                        sx={{
                          width: "100%",
                          height: 300,
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    ))}
                  </Slider>
                </Box>

                <Box sx={Style.Box.Chip}>
                  {property.featured && (
                    <Chip
                      label="FEATURED"
                      size="small"
                      sx={Style.Chip.featured}
                    />
                  )}
                  <Chip
                    label={property.type}
                    size="small"
                    sx={{
                      color: "#fff",
                      backgroundColor:
                        property.type === "For Sale" ? "#EF855C" : "#222222",
                      borderRadius: "4px",
                      fontWeight: 500,
                      fontSize: "10px",
                      padding: "0px 1px",
                      textTransform: "uppercase",
                      height: "18px",
                      minWidth: "auto",
                    }}
                  />
                </Box>

                <CardContent sx={Style.CardContent}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={Style.Typography.Title}
                  >
                    {property.title}
                  </Typography>
                  <Box sx={Style.Box.Price}>
                    <Typography variant="subtitle1">
                      {property.price}
                    </Typography>
                    <Typography variant="subtitle2">
                      {property.currency}
                    </Typography>
                  </Box>

                  <Typography variant="body2">
                    <Box sx={Style.Box.Icone}>
                      <BedIcon /> {property.beds} <ShowerIcon />{" "}
                      {property.baths}
                      <EmojiTransportationIcon /> {property.area}
                    </Box>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={Style.Box.Button}>
        <Button variant="contained" sx={Style.button}>
          Load More
        </Button>
      </Box>
    </>
  );
}

export default PropertiesPage;
