import numpy as np
import pickle

with open("wine-quality-model.pkl", "rb") as model_file:
    model = pickle.load(model_file)

with open("wine-quality-scaler.pkl", "rb") as scaler_file:
    scaler = pickle.load(scaler_file)


def test_predict():
    # Sample input data
    sample_data = np.array(
        [[7.0, 0.27, 0.36, 20.7, 0.045, 45.0, 170.0, 1.001, 3.0, 0.45, 8.8]]
    )

    # Make prediction
    prediction = model.predict(sample_data)

    # Assert prediction is not None and has the expected shape
    assert prediction is not None
    assert isinstance(prediction, np.ndarray)
    assert prediction.shape == (1,)


def test_predict_multiple_samples():
    # Multiple sample input data
    sample_data = np.array(
        [
            [7.0, 0.27, 0.36, 20.7, 0.045, 45.0, 170.0, 1.001, 3.0, 0.45, 8.8],
            [6.3, 0.3, 0.34, 1.6, 0.049, 14.0, 132.0, 0.994, 3.3, 0.49, 9.5],
        ]
    )

    # Make prediction
    prediction = model.predict(sample_data)

    # Assert prediction has the expected shape
    assert prediction.shape == (2,)
