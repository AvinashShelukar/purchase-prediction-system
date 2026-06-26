import React from "react";
import { Typography, Box } from "@mui/material";

export default function Footer() {

  return (

    <Box
      sx={{
        mt: 5,
        py: 2,
        textAlign: "center",
        borderTop: "1px solid #ddd"
      }}
    >

      <Typography variant="body2">

        © 2026 AI Purchase Prediction & Marketing Intelligence Platform

      </Typography>

      <Typography variant="caption">

        Developed using React • FastAPI • Scikit-learn • Material UI

      </Typography>

    </Box>

  );

}