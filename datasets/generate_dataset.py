import pandas as pd
import numpy as np

np.random.seed(42)

n = 10000

data = {
    "Age": np.random.randint(18, 65, n),
    "Annual_Income": np.random.randint(20000, 200000, n),
    "Family_Size": np.random.randint(1, 8, n),
    "Product_Price": np.random.randint(100, 50000, n),
    "Availability": np.random.randint(0, 2, n),
    "Discount_Percentage": np.random.randint(0, 50, n),
    "Previous_Purchases": np.random.randint(0, 30, n),
    "Website_Visits": np.random.randint(1, 50, n),
    "Time_Spent_Minutes": np.random.randint(1, 120, n),
    "Cart_Additions": np.random.randint(0, 20, n),
    "Need_Score": np.random.randint(1, 10, n)
}

df = pd.DataFrame(data)

purchase_score = (
    0.3 * df["Need_Score"]
    + 0.2 * df["Discount_Percentage"]
    + 0.1 * df["Previous_Purchases"]
    + 0.15 * df["Website_Visits"]
    + 0.1 * df["Cart_Additions"]
    + 0.15 * df["Availability"]
)

df["Purchased"] = (
    purchase_score > purchase_score.median()
).astype(int)

df.to_csv(
    "datasets/customer_purchase_data.csv",
    index=False
)

print("Dataset Generated Successfully!")
print(df.head())