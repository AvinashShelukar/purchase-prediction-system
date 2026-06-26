# 🛒 AI Purchase Prediction & Marketing Intelligence Platform

## 📌 Overview

The **AI Purchase Prediction & Marketing Intelligence Platform** is an end-to-end Machine Learning application that predicts the probability of a customer purchasing a product based on demographic, behavioral, and marketing-related features.

The project combines a **Random Forest Machine Learning model**, **FastAPI backend**, and **React.js dashboard** to provide real-time purchase predictions and business insights for targeted marketing campaigns.

---

## 🚀 Features

* Customer Purchase Prediction using Machine Learning
* Purchase Probability Score
* High / Medium / Low Customer Categorization
* Interactive React Dashboard
* FastAPI REST API
* Feature Importance Visualization
* Purchase Distribution Analytics
* Responsive Material UI Design
* Docker Support
* Ready for Cloud Deployment

---

## 🏗 System Architecture

```text
React Frontend
       │
       ▼
FastAPI REST API
       │
       ▼
Random Forest Model (.pkl)
       │
       ▼
Prediction Results
```

---

## 🧠 Machine Learning Pipeline

1. Data Collection
2. Data Cleaning
3. Feature Engineering
4. Exploratory Data Analysis
5. Model Training
6. Hyperparameter Tuning
7. Model Evaluation
8. Model Deployment

---

## 📊 Dataset Features

| Feature             | Description            |
| ------------------- | ---------------------- |
| Age                 | Customer Age           |
| Annual Income       | Customer Income        |
| Family Size         | Family Members         |
| Product Price       | Product Cost           |
| Availability        | Product Availability   |
| Discount Percentage | Current Discount       |
| Previous Purchases  | Historical Purchases   |
| Website Visits      | Website Activity       |
| Time Spent          | Minutes on Website     |
| Cart Additions      | Products Added to Cart |
| Need Score          | Customer Need Rating   |

Target Variable

* Purchased (0 = No, 1 = Yes)

---

## ⚙️ Tech Stack

### Frontend

* React.js
* Material UI
* Axios
* Recharts

### Backend

* FastAPI
* Uvicorn

### Machine Learning

* Scikit-Learn
* Pandas
* NumPy
* Joblib

### Visualization

* Matplotlib
* Recharts

---

## 📁 Project Structure

```text
purchase-prediction-system
│
├── backend
│   ├── api
│   ├── ml_pipeline
│   ├── models
│   └── services
│
├── frontend
│
├── datasets
│
├── notebooks
│
├── screenshots
│
├── README.md
│
└── requirements.txt
```

---

## 📈 Model Performance

| Metric    | Score |
| --------- | ----- |
| Accuracy  | 91.2% |
| Precision | 90.4% |
| Recall    | 92.1% |
| F1 Score  | 91.2% |

---

## 📷 Dashboard

### Home Dashboard

Add screenshot here

```
screenshots/dashboard.png
```

### Prediction Screen

Add screenshot here

```
screenshots/prediction.png
```

### Feature Importance

Add screenshot here

```
screenshots/feature_importance.png
```

---

## ▶️ Running the Project

Clone repository

```bash
git clone https://github.com/yourusername/purchase-prediction-system.git
```

Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn api.main:app --reload
```

Frontend

```bash
cd frontend

npm install

npm start
```

Backend

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

Frontend

```
http://localhost:3000
```

---

## 🐳 Docker

```bash
docker-compose up --build
```

---

## ☁️ Deployment

Frontend

Vercel

Backend

Render

---

## 📌 Future Enhancements

* XGBoost Model
* SHAP Explainability
* PostgreSQL Integration
* JWT Authentication
* User Management
* Email Marketing Recommendation
* Cloud Storage Integration

---

## 👨‍💻 Author

**Avinash Shelukar**

M.Tech Artificial Intelligence

Walchand College of Engineering, Sangli

LinkedIn: https://linkedin.com/in/your-profile

GitHub: https://github.com/yourusername

Email: [your-email@example.com](mailto:your-email@example.com)
