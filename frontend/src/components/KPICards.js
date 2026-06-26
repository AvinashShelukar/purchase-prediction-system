import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const cards = [
  {
    title: "Total Customers",
    value: "10,000",
    icon: <PeopleIcon fontSize="large" />,
    color: "#1976d2",
  },
  {
    title: "Model Accuracy",
    value: "91.2%",
    icon: <AnalyticsIcon fontSize="large" />,
    color: "#2e7d32",
  },
  {
    title: "Predictions",
    value: "8,542",
    icon: <TrendingUpIcon fontSize="large" />,
    color: "#ed6c02",
  },
  {
    title: "Revenue Forecast",
    value: "₹12.5L",
    icon: <CurrencyRupeeIcon fontSize="large" />,
    color: "#9c27b0",
  },
];

export default function KPICards() {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.title}>
          <Paper
            elevation={4}
            sx={{
              p: 3,
              borderLeft: `6px solid ${card.color}`,
            }}
          >
            <Typography color="text.secondary">
              {card.title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ mt: 1 }}
            >
              {card.value}
            </Typography>

            <div style={{ marginTop: 15, color: card.color }}>
              {card.icon}
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}