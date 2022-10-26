import React from "react";
import { Container } from "@mui/system";
import DrawerAppBar from "./Components/DrawerAppBar";
import IntroCard from "./Components/IntroCard";
import Scanner from "./Components/Scanner";
// import Generator from "./Components/Generator";

function App() {
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
          // height: "calc(100vh)",
        }}
      >
        <IntroCard />
        <Scanner />
      </Container>
    </>
  );
}

export default App;
