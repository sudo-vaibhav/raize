import os
import numpy as np
import pandas as pd
import tensorflow as tf
from flask import Flask, request,jsonify

df = pd.read_csv("./data.csv")
df["High"]*=1000

# Define a flask app
app = Flask(__name__)

# @app.route('/', methods=['GET'])

@app.route('/donations', methods=['GET', 'POST'])
def upload():
    if request.method == 'GET':
        return jsonify(list(df["High"]))
    return None


if __name__ == '__main__':
    app.run(debug=True)
