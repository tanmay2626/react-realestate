import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DraftsRoundedIcon from "@mui/icons-material/DraftsRounded";

const Header = (props) => {
  const pages = ["Rent", "Buy", "Sell"];

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#EEEE" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <DraftsRoundedIcon sx={{ color: "#764AF1" }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Roboto",
                fontWeight: 700,
                color: "black",
                textDecoration: "none",
                ml: 1,
              }}
            >
              Estatery
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 1,
                    ml: 5,
                    color: "black",
                    display: "block",
                    mt: 2,
                    textTransform: "none",
                    fontSize: 20,
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Button
                size="small"
                sx={{
                  textTransform: "none",
                  mr: 3,
                  borderColor: "#CFD2CF",
                  color: "#764AF1",
                  borderRadius: 2,
                }}
                variant="outlined"
              >
                Login
              </Button>
              <Button
                size="small"
                sx={{
                  textTransform: "none",
                  backgroundColor: "#764AF1",
                  borderRadius: 2,
                }}
                variant="contained"
              >
                SignUp
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
