import React from "react";

import {
  Paper,
  Typography,
} from "@mui/material";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Purchased", value: 6200 },
  { name: "Not Purchased", value: 3800 },
];

const COLORS = [
  "#4caf50",
  "#f44336",
];

export default function Charts() {

  return (

    <Paper
      elevation={4}
      sx={{
        p: 3,
        mt: 3,
        height: 420
      }}
    >

      <Typography
        variant="h6"
        gutterBottom
      >
        Purchase Distribution
      </Typography>

      <ResponsiveContainer
        width="100%"
        height="90%"
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={130}
            label
          >

            {data.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index]}
              />

            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </Paper>

  );

}