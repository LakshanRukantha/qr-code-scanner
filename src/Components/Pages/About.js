import React from "react";
import { Container } from "@mui/system";
import DrawerAppBar from "../DrawerAppBar";
import Footer from "../Footer";
import { Typography } from "@mui/material";

function About() {
  return (
    <Container
      className="main-wrapper"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        paddingLeft: "0",
        paddingRight: "0",
        minWidth: "100%",
      }}
    >
      <DrawerAppBar />
      <Container
        sx={{
          width: "100%",
          top: "2rem",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Typography sx={{ textAlign: "center" }}>About</Typography>
      </Container>
      <Footer />
    </Container>
  );
}

export default About;
