from flask import Flask, request, jsonify
import pickle
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
atributos = [
    "fixed acidity",
    "volatile acidity",
    "citric acid",
    "residual sugar",
    "chlorides",
    "free sulfur dioxide",
    "total sulfur dioxide",
    "density",
    "pH",
    "sulphates",
    "alcohol",
]

CORS(app, resources={r"/*": {"origins": "*"}})

with open("wine-quality-model.pkl", "rb") as model_file:
    model = pickle.load(model_file)

with open("wine-quality-scaler.pkl", "rb") as scaler_file:
    scaler = pickle.load(scaler_file)


@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    input = pd.DataFrame(data, columns=atributos)
    X_input = input.values[:, 0:11].astype(float)
    scaled_data = scaler.transform(X_input)
    return jsonify({"predictions": model.predict(scaled_data).tolist()})


if __name__ == "__main__":
    app.run(debug=True)
