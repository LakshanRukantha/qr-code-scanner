import React from "react";
import { Container } from "@mui/system";
import DrawerAppBar from "../DrawerAppBar";
import CodeScanner from "../CodeScanner";
import IntroCard from "../IntroCard";
import Footer from "../Footer";
import "../Pages/Scanner.css";

function Scanner() {
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
          display: "flex",
          flexDirection: "column",
          alignItems: "space-around",
          justifyContent: "space-around",
          position: "relative",
        }}
      >
        <IntroCard />
        <CodeScanner />
      </Container>
      <Footer />
    </Container>
  );
}

export default Scanner;
