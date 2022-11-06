import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import Textarea from "@mui/joy/Textarea";
import QRCode from "qrcode";
import DrawerAppBar from "../DrawerAppBar";
import Footer from "../Footer";
import "../Pages/Generator.css";

const Generator = () => {
  const [imgUrl, setImgUrl] = useState("QRCodeX");

  const HandleTextChange = (e) => {
    QRCode.toDataURL(e.target.value)
      .then((url) => {
        setImgUrl(url);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <DrawerAppBar />

      <Card className="qr-code-wrapper" sx={{ maxWidth: 300 }}>
        <CardActionArea
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <CardMedia component="img" image={imgUrl} alt="QR Code" />
        </CardActionArea>
      </Card>

      <Box
        sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}
      >
        <Textarea
          className="data-text"
          size="sm"
          label="Size"
          placeholder="Text"
          onChange={HandleTextChange}
          fullWidth
        />
      </Box>

      <Footer />
    </>
  );
};

export default Generator;
