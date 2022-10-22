import React from "react";
import { Container } from "@mui/system";
import DenseAppBar from "./Components/AppBar";
// import Button from "./Components/Button";
import IntroCard from "./Components/IntroCard";
import Scanner from "./Components/Scanner";

function App() {
  return (
    <>
      <DenseAppBar />
      <Container>
        <IntroCard />
        <Scanner/>
        {/* <Button /> */}
      </Container>
    </>
  );
}

export default App;
