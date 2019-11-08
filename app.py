from flask import request, Flask
import json
import sys

sys.path.append("./controllers")
sys.path.append("./utils")

import endpoint
from categories import CategoriesController
from products import ProductsController

'''
    This is the main backend application for our website that will allow
    users to go through a workflow to find a suitable laptop/desktop. We
    will be utilizing the Best Buy API to do so.
'''
app = Flask(__name__)

##### CATEGORIES API #####

@app.route("/categories", methods = ["POST"])
def categories():
    ''' Calls the Categories API and returns based on certain parameters '''
    return endpoint.post(request, CategoriesController)

##### PRODUCTS API #####

@app.route("/products", methods = ["POST"])
def products():
    ''' Calls the Products API and returns based on certain parameters '''
    return endpoint.post(request, Products)
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
    print("I DON'T KNOW HOW TO LOG: Running backend server for TopTop.")
    app.run(debug = True) # We will not be running this in prod
