from flask import request, Flask
from dotenv import load_dotenv
import os
import json
import requests

load_dotenv()

'''
    This is the main backend application for our website that will allow
    users to go through a workflow to find a suitable laptop/desktop. We
    will be utilizing the Best Buy API to do so.
'''
app = Flask(__name__)

'''
    Here are the necessary strings and paths for the Best Buy API calls.
    We will be utilizing the Products and the Categories API.
'''
API_KEY         = os.getenv("API_KEY") 
CATEGORIES_PATH = "https://api.bestbuy.com/v1/categories"
PRODUCTS_PATH   = "https://api.bestbuy.com/v1/products"

##### UTILITY FUNCTIONS #####

''' Returns a map with an error message '''
def error(msg):
    return {
        "message" : msg,
        "resultCode" : -1
    }

''' Returns the string with the API KEY and format specifier '''
def add_api_and_format(form):
    return "&apiKey=" + API_KEY + "&format=" + form

##### CATEGORIES API #####

''' Validates the POST request for /categories '''
def validate_categories_data(data):
    # TODO
    pass

''' Calls the Categories API and returns based on certain parameters '''
@app.route("/categories", methods = ["POST"])
def categories():
    # Start of building the URL
    url = CATEGORIES_PATH

    # Receiving the JSON from the POST request
    try:
        data = request.get_json()
        validate_categories_data(data)
    except:
        return error("Given invalid parameters")

    # Adds the API key and the JSON format 
    url += "?" + add_api_and_format("json")

    print("Final URL:", url)

    # Sends a GET request with the constructed url
    response = requests.get(url)

    # Returns the JSON object
    return response.json()

##### PRODUCTS API #####

''' Validates the POST request for /products '''
def validate_products_data(data):
    # TODO
    pass

''' Calls the Products API and returns based on certain parameters '''
@app.route("/products", methods = ["POST"])
def products():
    # Start of building the URL
    url = PRODUCTS_PATH

    # Receiving the JSON from the POST request
    try:
        data = request.get_json()
        validate_categories_data(data)
    except:
        return error("Given invalid parameters")

    # Adds the API key and the JSON format 
    url += "?" + add_api_and_format("json")

    print("Final URL:", url)

    # Sends a GET request with the constructed url
    response = requests.get(url)

    # Returns the JSON object
    return response.json()

##### MAIN #####

if __name__ == "__main__":
    print("Running backend server for TopTop.")
    app.run(debug = True) # We will not be running this in prod
