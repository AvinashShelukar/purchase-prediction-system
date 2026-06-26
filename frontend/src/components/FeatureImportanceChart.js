import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Paper,
  Typography
} from "@mui/material";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

export default function FeatureImportanceChart() {

  const [data, setData] = useState([]);

  useEffect(() => {

    axios
      .get("http://127.0.0.1:8000/feature-importance")
      .then((response) => {

        const formatted = Object.entries(response.data).map(
          ([feature, importance]) => ({
            feature,
            importance
          })
        );

        formatted.sort(
          (a, b) => b.importance - a.importance
        );

        setData(formatted);

      });

  }, []);

  return (

    <Paper
      elevation={4}
      sx={{
        mt: 3,
        p: 3,
        height: 500
      }}
    >

      <Typography
        variant="h6"
        gutterBottom
      >
        Feature Importance
      </Typography>

      <ResponsiveContainer
        width="100%"
        height="90%"
      >

        <BarChart
          data={data}
          layout="vertical"
        >

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            type="number"
          />

          <YAxis
            dataKey="feature"
            type="category"
            width={150}
          />

          <Tooltip />

          <Bar
            dataKey="importance"
          />

        </BarChart>

      </ResponsiveContainer>

    </Paper>

  );

}