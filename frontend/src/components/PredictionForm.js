import React, { useState } from "react";
import axios from "axios";

import {
  Paper,
  Grid,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress
} from "@mui/material";

const PredictionForm = () => {

  const [formData, setFormData] = useState({
    Age: "",
    Annual_Income: "",
    Family_Size: "",
    Product_Price: "",
    Availability: "",
    Discount_Percentage: "",
    Previous_Purchases: "",
    Website_Visits: "",
    Time_Spent_Minutes: "",
    Cart_Additions: "",
    Need_Score: ""
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value)
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        formData
      );

      setResult(response.data);

    } catch (error) {

      console.error(error);

      alert("Prediction Failed");

    }

    setLoading(false);

  };

  return (

    <Paper
      elevation={4}
      sx={{
        p:4,
        mt:3
      }}
    >

      <Typography
        variant="h5"
        gutterBottom
      >
        Customer Purchase Prediction
      </Typography>

      <form onSubmit={handleSubmit}>

        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Age"
              name="Age"
              type="number"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Annual Income"
              name="Annual_Income"
              type="number"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Family Size"
              name="Family_Size"
              type="number"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Product Price"
              name="Product_Price"
              type="number"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Availability (0 or 1)"
              name="Availability"
              type="number"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Discount %"
              name="Discount_Percentage"
              type="number"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Previous Purchases"
              name="Previous_Purchases"
              type="number"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Website Visits"
              name="Website_Visits"
              type="number"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Time Spent (Minutes)"
              name="Time_Spent_Minutes"
              type="number"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Cart Additions"
              name="Cart_Additions"
              type="number"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="Need Score (1-10)"
              name="Need_Score"
              type="number"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>

            <Button
              variant="contained"
              fullWidth
              size="large"
              type="submit"
            >
              {loading ? <CircularProgress size={25}/> : "Predict Purchase"}
            </Button>

          </Grid>

        </Grid>

      </form>

      {result && (

        <Alert
          severity={
            result.category === "High Potential"
            ? "success"
            : result.category === "Medium Potential"
            ? "warning"
            : "error"
          }
          sx={{ mt:4 }}
        >

          <Typography variant="h6">

            Purchase Probability :
            {" "}
            <strong>
              {result.purchase_probability}%
            </strong>

          </Typography>

          <Typography>

            Prediction :
            {" "}
            {result.prediction === 1
              ? "Customer Will Purchase"
              : "Customer Will Not Purchase"}

          </Typography>

          <Typography>

            Category :
            {" "}
            {result.category}

          </Typography>

        </Alert>

      )}

    </Paper>

  );

};

export default PredictionForm;