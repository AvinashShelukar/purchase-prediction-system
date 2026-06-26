import React from "react";
import {
  Paper,
  Typography,
  Grid,
  LinearProgress,
  Box,
  Chip
} from "@mui/material";

const metrics = [
  {
    name: "Accuracy",
    value: 91.2
  },
  {
    name: "Precision",
    value: 90.4
  },
  {
    name: "Recall",
    value: 92.1
  },
  {
    name: "F1 Score",
    value: 91.2
  }
];

export default function ModelPerformance() {

  return (

    <Paper
      elevation={4}
      sx={{
        mt: 3,
        p: 3
      }}
    >

      <Typography
        variant="h5"
        gutterBottom
        fontWeight="bold"
      >
        Model Performance
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        mb={3}
      >
        Performance metrics of the trained Random Forest model.
      </Typography>

      {metrics.map((metric) => (

        <Box
          key={metric.name}
          mb={3}
        >

          <Grid
            container
            justifyContent="space-between"
          >

            <Grid item>

              <Typography
                fontWeight="bold"
              >
                {metric.name}
              </Typography>

            </Grid>

            <Grid item>

              <Chip
                color="primary"
                label={`${metric.value}%`}
              />

            </Grid>

          </Grid>

          <LinearProgress
            variant="determinate"
            value={metric.value}
            sx={{
              mt: 1,
              height: 10,
              borderRadius: 5
            }}
          />

        </Box>

      ))}

      <Box mt={4}>

        <Typography variant="h6">
          Model Details
        </Typography>

        <Typography>
          • Algorithm: Random Forest Classifier
        </Typography>

        <Typography>
          • Training Samples: 10,000
        </Typography>

        <Typography>
          • Features: 11
        </Typography>

        <Typography>
          • Target Variable: Purchased
        </Typography>

        <Typography>
          • Backend: FastAPI
        </Typography>

        <Typography>
          • Frontend: React + Material UI
        </Typography>

      </Box>

    </Paper>

  );

}