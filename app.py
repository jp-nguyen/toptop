from flask import request, Flask, redirect, url_for, render_template, jsonify
from dotenv import load_dotenv
import os
import json

load_dotenv()

'''
    This is the main backend application for our website that will allow
    users to go through a workflow to find a suitable laptop/desktop. We
    will be utilizing the Best Buy API to do so.
'''
app = Flask(__name__)

'''
    The API Key for Best Buy is received via a .env file.
'''
API_KEY = os.getenv("API_KEY") 


''' Testing a flask function '''
@app.route("/test")
def test():
    data = {"message": "Hello world!", "resultCode": 10}
    return jsonify(data)


if __name__ == "__main__":
    print("Running backend server for TopTop.")
    app.run(debug = True) # We will not be running this in prod
