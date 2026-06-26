from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer

def get_preprocessor():

    numeric_features = [
        'Age',
        'Annual_Income',
        'Family_Size',
        'Product_Price',
        'Availability',
        'Discount_Percentage',
        'Previous_Purchases',
        'Website_Visits',
        'Time_Spent_Minutes',
        'Cart_Additions',
        'Need_Score'
    ]

    numeric_transformer = Pipeline([
        ('imputer', SimpleImputer(strategy='median')),
        ('scaler', StandardScaler())
    ])

    preprocessor = ColumnTransformer([
        ('num', numeric_transformer, numeric_features)
    ])

    return preprocessor

if __name__ == "__main__":
    preprocessor = get_preprocessor()
    print("Preprocessor created successfully!")