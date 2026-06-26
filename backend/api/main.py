from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd

app = FastAPI(
    title="Purchase Prediction API",
    version="1.0"
)

model = joblib.load(
    "backend/models/purchase_model.pkl"
)

class Customer(BaseModel):
    Age: int
    Annual_Income: int
    Family_Size: int
    Product_Price: int
    Availability: int
    Discount_Percentage: int
    Previous_Purchases: int
    Website_Visits: int
    Time_Spent_Minutes: int
    Cart_Additions: int
    Need_Score: int

@app.get("/")
def home():
    return {
        "message": "API Running Successfully"
    }

@app.post("/predict")
def predict(customer: Customer):

    df = pd.DataFrame(
        [customer.model_dump()]
    )

    probability = float(
        model.predict_proba(df)[0][1]
    )

    prediction = int(
        model.predict(df)[0]
    )

    if probability >= 0.7:
        category = "High Potential"
    elif probability >= 0.4:
        category = "Medium Potential"
    else:
        category = "Low Potential"

    return {
        "purchase_probability":
            round(probability * 100, 2),

        "prediction":
            prediction,

        "category":
            category
    }