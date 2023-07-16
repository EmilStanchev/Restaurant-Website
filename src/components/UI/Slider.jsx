import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import bgImage from "../../assets/homeBackground.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import soupBgImg from "../../assets/soupBackground.png";
import restorauntBgImg from "../../assets/restorauntBg.png";

const ImageSlider = () => {
  const images = [
    {
      src: bgImage,
      caption: "Welcome to Taste Buds",
    },
    {
      src: soupBgImg,
      caption: "Best soup dishes ",
    },
    {
      src: restorauntBgImg,
      caption: "Best service",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);
  const nextImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const previousImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        overflowX: "hidden",
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            position: "absolute",
            top: `${isMobile ? "25%" : "0%"}`,
            left: `${isMobile ? "0%" : "0%"}`,
            width: "100%",
            height: `${isMobile ? "50%" : "100%"}`,
            opacity: index === activeIndex ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            backgroundImage: `url(${image.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "hidden",
          }}
        >
          <Box
            onClick={previousImage}
            sx={{
              position: "absolute",
              zIndex: "1",
              top: "50%",
              left: "1%",
            }}
          >
            <ArrowBackIosIcon
              sx={{
                fontSize: "42px",

                "&:hover": { color: "orange" },
              }}
            />
          </Box>
          <Box
            onClick={nextImage}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0%",
              zIndex: "1",
            }}
          >
            <ArrowForwardIosIcon
              sx={{
                fontSize: "42px",
                "&:hover": { color: "orange" },
              }}
            />
          </Box>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              textAlign: "center",
              position: "absolute",
              top: "20%",
              width: "100%",
              height: "10%",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              padding: "1rem",
            }}
          >
            {image.caption}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ImageSlider;
