import joblib
import pandas as pd

# Load trained model
model = joblib.load(
    "backend/models/purchase_model.pkl"
)

def predict_purchase(customer_data):

    df = pd.DataFrame([customer_data])

    probability = float(model.predict_proba(df)[0][1])

    prediction = int(model.predict(df)[0])

    if probability >= 0.7:
        category = "High Potential"
    elif probability >= 0.4:
        category = "Medium Potential"
    else:
        category = "Low Potential"

    return {
        "purchase_probability": round(probability * 100, 2),
        "prediction": prediction,
        "category": category
    }


if __name__ == "__main__":

    sample_customer = {
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

    result = predict_purchase(sample_customer)

    print(result)