import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Stack from "@mui/material/Stack";

const Item = ({
  name,
  address,
  img,
  specs,
  price,
  city,
  availableFrom,
  type,
}) => {
  const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  };

  return (
    <Card className="item">
      <CardMedia component="img" alt="green iguana" height="140" image={img} />
      <CardContent sx={{ p: 1, "&:last-child": { pb: 0 } }}>
        <Typography
          sx={{
            color: "#764AF1",
            fontFamily: "Albert Sans, sans-serif",
            fontWeight: 600,
            fontSize: 1 + "rem",
            pl: 1,
          }}
          variant="h5"
          gutterBottom
          component="div"
        >
          ₹ {price.toLocaleString()} <span>/month</span>
        </Typography>
        <Typography
          sx={{
            fontFamily: "Albert Sans, sans-serif",
            fontWeight: 600,
            fontSize: 1.2 + "rem",
            pl: 1,
          }}
          variant="h1"
          gutterBottom
          component="div"
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Albert Sans, sans-serif",
            fontWeight: 500,
            pl: 1,
            mb: 1,
          }}
          variant="body2"
          color="text.secondary"
        >
          {address}
        </Typography>
        <div className="details-wrap">
          <div className="details-sec">
            <Stack
              sx={{ fontWeight: 500 }}
              direction="row"
              alignItems="center"
              gap={0.5}
            >
              <LocationOnOutlinedIcon sx={{ fontSize: 20, color: "#764AF1" }} />
              <Typography
                sx={{
                  fontFamily: "Albert Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: 0.8 + "rem",
                }}
                variant="body2"
              >
                {capitalize(city)}
              </Typography>
            </Stack>
          </div>
          <div className="details-sec">
            <Stack
              sx={{ fontWeight: 500 }}
              direction="row"
              alignItems="center"
              gap={0.5}
            >
              <CalendarMonthIcon sx={{ fontSize: 20, color: "#764AF1" }} />
              <Typography
                sx={{
                  fontFamily: "Albert Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: 0.8 + "rem",
                }}
                variant="body2"
              >
                {availableFrom}
              </Typography>
            </Stack>
          </div>
        </div>
        <Divider variant="middle" flexItem sx={{ mt: 1 }} />
      </CardContent>
      <div className="specs-wrap">
        <div className="specs-bed">
          <Stack
            sx={{ fontWeight: 500 }}
            direction="row"
            alignItems="center"
            gap={0.5}
          >
            <BedIcon sx={{ fontSize: 25, color: "#764AF1" }} />
            <Typography
              sx={{
                fontFamily: "Albert Sans, sans-serif",
                fontWeight: 500,
                fontSize: 0.8 + "rem",
              }}
              variant="body2"
            >
              {specs[0]} Beds
            </Typography>
          </Stack>
        </div>
        <div className="specs-bath">
          <Stack direction="row" alignItems="center" gap={0.5}>
            <BathtubIcon sx={{ fontSize: 22, color: "#764AF1" }} />
            <Typography
              sx={{
                fontFamily: "Albert Sans, sans-serif",
                fontWeight: 500,
                fontSize: 0.8 + "rem",
              }}
              variant="body2"
            >
              {specs[1]} Bathrooms
            </Typography>
          </Stack>
        </div>
        <div className="specs-area">
          <Stack direction="row" alignItems="center" gap={0}>
            <SquareFootIcon sx={{ fontSize: 25, color: "#764AF1" }} />
            <Typography
              sx={{
                fontFamily: "Albert Sans, sans-serif",
                fontWeight: 500,
                fontSize: 0.8 + "rem",
              }}
              variant="body2"
            >
              {specs[2]} sqft
            </Typography>
          </Stack>
        </div>
      </div>
    </Card>
  );
};

export default Item;
