import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load dataset
df = pd.read_csv("datasets/customer_purchase_data.csv")

# Features and target
X = df.drop("Purchased", axis=1)
y = df["Purchased"]

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Train model
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X_train, y_train)

# Evaluate
predictions = model.predict(X_test)

accuracy = accuracy_score(
    y_test,
    predictions
)

print(f"Accuracy: {accuracy:.4f}")

# Save model
joblib.dump(
    model,
    "backend/models/purchase_model.pkl"
)

print("Model saved successfully!")

import json

feature_importance = {
    feature: float(importance)
    for feature, importance in zip(
        X.columns,
        model.feature_importances_
    )
}

with open(
    "backend/models/feature_importance.json",
    "w"
) as f:
    json.dump(feature_importance, f, indent=4)

print("Feature importance saved.")