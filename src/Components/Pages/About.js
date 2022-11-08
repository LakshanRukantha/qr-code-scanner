import React from "react";
import { Box } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import DrawerAppBar from "../DrawerAppBar";
import Footer from "../Footer";

import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

function About() {
  return (
    <Container
      className="main-wrapper"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100vh",
        paddingLeft: "0",
        paddingRight: "0",
        minWidth: "100%",
      }}
    >
      <DrawerAppBar />
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          marginTop: "4rem",
          height: "500px",
          top: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            image={"https://i.ibb.co/xHxJ0D8/qrcodex.jpg"}
            sx={{
              maxWidth: 80,
              maxHeight: 80,
            }}
          />
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontSize: "1.5rem",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            QRCodeX
          </Typography>
          <Typography
            variant="h1"
            component="h6"
            sx={{
              textAlign: "center",
              marginTop: "0.5rem",
              fontSize: "0.8rem",
            }}
          >
            Version: 0.1.0
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h1"
            component="h6"
            sx={{ textAlign: "center", fontSize: "1rem" }}
          >
            Developer: Lakshan Rukantha
          </Typography>
          <Typography
            variant="h1"
            component="h6"
            sx={{
              textAlign: "center",
              marginTop: "0.5rem",
              marginBottom: "1rem",
              fontSize: "1rem",
            }}
          >
            Undergraduate student in NSBM Green University - BSc (Hons) in
            Software Engineering
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <Stack sx={{ marginTop: "0.5rem" }} direction="row" spacing={2}>
            <a href="https://lakshanrukantha.github.io/" target="blank">
              <LanguageIcon />
            </a>
            <a href="https://github.com/LakshanRukantha" target="blank">
              <GitHubIcon />
            </a>
            <a href="https://lk.linkedin.com/in/lakshanrukantha" target="blank">
              <LinkedInIcon />
            </a>
            <a
              href="https:www.facebook.com/LakshanRukantha.Laki"
              target="blank"
            >
              <FacebookIcon />
            </a>
          </Stack>
        </Box>
      </Container>
      <Footer />
    </Container>
  );
}

export default About;
