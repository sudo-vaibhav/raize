import os
import numpy as np
import pandas as pd
import tensorflow as tf
from flask import Flask, request,jsonify
from flask_cors import CORS

df = pd.read_csv("./data.csv")
df["High"]*=1000

# Define a flask app
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


# @app.route('/', methods=['GET'])

@app.route('/donations', methods=['GET', 'POST'])
def upload():
    if request.method == 'GET':
        return jsonify({"amounts": list(df["High"][-12:]),"dates":list(df["Date"][-12:])})
    return None


if __name__ == '__main__':
    app.run(debug=True)