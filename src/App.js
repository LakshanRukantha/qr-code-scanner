import React from "react";
import { Container } from "@mui/system";
import DenseAppBar from "./Components/AppBar";
import IntroCard from "./Components/IntroCard";
import Scanner from "./Components/Scanner";

function App() {
  return (
    <>
      <DenseAppBar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height: "calc(100vh-10px)",
        }}
      >
        <IntroCard />
        <Scanner />
      </Container>
    </>
  );
}

export default App;
