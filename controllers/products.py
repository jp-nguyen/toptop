from base import Controller
from jsonschema import validate
import bestbuy
import requests
import sys
sys.path.append("../utils")
''' Contains the controller for the products endpoint '''

class ProductsController(Controller):
    ''' Class definition of a controller for products using the Products API. '''

    def validate(data):
        ''' Validates data based on schema for products '''

        # TODO; Prepare the schema for categories
        schema = {
            "type" : "object"
        }

        # Validate the data with schema
        validate(data, schema)



    def handle(data):
        ''' Handles data and returns the response for categories '''
        
        # Creating url
        url = bestbuy.PRODUCTS_PATH

        # TODO -- use data to build url

        # Adds the API key and the JSON format 
        url += "?" + bestbuy.add_api_and_format("json")


        print("Final URL:", url)

        # Sends a GET request with the constructed url
        response = requests.get(url)

        # Returns the JSON object
        return response.json()
