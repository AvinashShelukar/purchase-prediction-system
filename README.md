# 🛒 AI Purchase Prediction & Marketing Intelligence Platform

An end-to-end Machine Learning application that predicts the probability of customer purchases using demographic and behavioral data. The system provides real-time predictions through a FastAPI backend and an interactive React dashboard, enabling businesses to identify high-potential customers for targeted marketing campaigns.

---

## 📌 Project Overview

This project combines Machine Learning, FastAPI, and React to build a complete purchase prediction system.

The application:

- Predicts whether a customer is likely to purchase a product.
- Calculates a purchase probability score.
- Categorizes customers into High, Medium, or Low Potential.
- Visualizes feature importance and purchase distribution.
- Provides an intuitive dashboard for business users.

---

## 🚀 Features

- 🤖 Machine Learning Purchase Prediction
- 📊 Interactive React Dashboard
- ⚡ FastAPI REST API
- 📈 Feature Importance Visualization
- 🥧 Purchase Distribution Chart
- 📱 Responsive Material UI Interface
- 🐳 Docker Support
- ☁️ Cloud Deployment Ready

---

## 🧠 Machine Learning Workflow

```
Data Collection
        │
        ▼
Data Preprocessing
        │
        ▼
Feature Engineering
        │
        ▼
Model Training
        │
        ▼
Model Evaluation
        │
        ▼
Purchase Prediction
        │
        ▼
React Dashboard
```

---

## 📊 Dataset Features

| Feature | Description |
|----------|-------------|
| Age | Customer Age |
| Annual Income | Customer Annual Income |
| Family Size | Number of Family Members |
| Product Price | Price of Product |
| Availability | Product Availability |
| Discount Percentage | Discount Offered |
| Previous Purchases | Historical Purchases |
| Website Visits | Number of Website Visits |
| Time Spent Minutes | Time Spent on Website |
| Cart Additions | Products Added to Cart |
| Need Score | Customer Need Rating |

### Target Variable

- **Purchased**
  - 1 = Customer Purchased
  - 0 = Customer Did Not Purchase

---

## 🏗️ Tech Stack

### Frontend

- React.js
- Material UI
- Axios
- Recharts

### Backend

- FastAPI
- Uvicorn

### Machine Learning

- Scikit-learn
- Pandas
- NumPy
- Joblib

### Development Tools

- Git
- GitHub
- VS Code
- Docker

---

## 📁 Project Structure

```
purchase-prediction-system
│
├── backend
│   ├── api
│   ├── ml_pipeline
│   ├── models
│   └── services
│
├── frontend
│   ├── public
│   └── src
│
├── datasets
├── notebooks
├── screenshots
├── README.md
├── requirements.txt
├── docker-compose.yml
└── .gitignore
```

---

## 📈 Dashboard Features

- KPI Cards
- Customer Prediction Form
- Purchase Probability
- Customer Category
- Purchase Distribution Chart
- Feature Importance Chart

---

## 📷 Dashboard Screenshots

### Dashboard

![Dashboard](screenshots/dashboard.png)

---

### Prediction

![Prediction](screenshots/prediction.png)

---

### Feature Importance

![Feature Importance](screenshots/feature_importance.png)

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/AvinashShelukar/purchase-prediction-system.git

cd purchase-prediction-system
```

### Backend

```bash
pip install -r requirements.txt

uvicorn backend.api.main:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm start
```

---

## 🌐 API Documentation

After running FastAPI:

```
http://127.0.0.1:8000/docs
```

---

## 🐳 Docker

Build and run:

```bash
docker compose up --build
```

---

## 📊 Sample Prediction

**Input**

```json
{
  "Age": 35,
  "Annual_Income": 180000,
  "Family_Size": 4,
  "Product_Price": 1000,
  "Availability": 1,
  "Discount_Percentage": 45,
  "Previous_Purchases": 25,
  "Website_Visits": 40,
  "Time_Spent_Minutes": 100,
  "Cart_Additions": 15,
  "Need_Score": 9
}
```

**Output**

```json
{
  "purchase_probability": 99.0,
  "prediction": 1,
  "category": "High Potential"
}
```

---

## 📌 Future Improvements

- PostgreSQL Integration
- JWT Authentication
- User Login System
- SHAP Explainability
- XGBoost Model
- CI/CD Pipeline
- Cloud Deployment

## ⭐ If you found this project useful, consider giving it a star!