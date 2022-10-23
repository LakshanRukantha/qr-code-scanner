import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function IntroCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: 1,
        mb: 3,
        mt: 10,
      }}
    >
      <Typography
        sx={{
          fontSize: 16,
          padding: 2,
          maxWidth: "500px",
          textAlign: "center",
        }}
        color="text.secondary"
      >
        The QR & Barcode Scanner is the perfect tool to scan your QR codes
        anytime and anywhere. Now you can easily Scan your QR codes all in one
        place.
      </Typography>
    </Card>
  );
}
