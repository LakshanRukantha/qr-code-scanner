import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/system";
import { Box } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import { saveAs } from "file-saver";
import TextField from "@mui/material/TextField";
import QRCode from "qrcode";
import DrawerAppBar from "../DrawerAppBar";
import Footer from "../Footer";
import "../Pages/Generator.css";

const Generator = () => {
  const [imgUrl, setImgUrl] = useState("Lakshan");

  if (imgUrl === "") {
    QRCode.toDataURL(imgUrl)
      .then((url) => {
        setImgUrl(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const HandleTextChange = (e) => {
    QRCode.toDataURL(e.target.value)
      .then((url) => {
        setImgUrl(url);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const downloadImage = () => {
    saveAs(imgUrl, "image.jpg"); // Put your image url here.
  };

  return (
    <Container
      className="main-wrapper"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        minHeight: "100vh",
        paddingLeft: "0",
        paddingRight: "0",
        minWidth: "100%",
      }}
    >
      <DrawerAppBar />
      <Container
        sx={{
          display: " block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Card
          elevation={2}
          sx={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1200px",
            paddingTop: "2rem",
            paddingBottom: "2rem",
            marginBottom: "3rem",
            borderRadius: "0.5rem",
          }}
        >
          <Card
            className="qr-code-wrapper"
            elevation={5}
            sx={{ maxWidth: 300, borderRadius: "0.5rem" }}
          >
            <CardActionArea
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <CardMedia
                component="img"
                image={imgUrl}
                onClick={downloadImage}
                sx={{ maxWidth: 300 }}
              />
            </CardActionArea>
          </Card>
        </Card>
        <Card
          elevation={2}
          sx={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1200px",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            marginTop: "2rem",
            marginBottom: "3rem",
            borderRadius: "0.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              padding: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <TextField
              className="data-text"
              id="outlined-multiline-flexible"
              label="Text"
              placeholder="Type anything that you want..."
              multiline
              maxRows={4}
              fullWidth
              onChange={HandleTextChange}
              sx={{ display: "auto", width: "300px", margin: "auto" }}
            />
          </Box>
        </Card>
      </Container>

      <Footer />
    </Container>
  );
};

export default Generator;
