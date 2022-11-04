import React from "react";
import { Container } from "@mui/system";
import DrawerAppBar from "../DrawerAppBar";
import CodeScanner from "../CodeScanner";
import IntroCard from "../IntroCard";
import Footer from "../Footer";

function Scanner() {
  return (
    <>
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
    </>
  );
}

export default Scanner;
