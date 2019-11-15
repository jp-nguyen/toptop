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

 
        schema = {
            "type" : "object",
            "properties" : {
                "desktop" : { "type" : "boolean" },
                "laptop" : { "type" : "boolean" },
                "minPrice" : { "type" : "number" },
                "maxPrice" : { "type" : "number" },
                "manufacturer" : { 
                    "type" : "array",
                    "items" : { "type" : "string" }
                },
                "features" : {
                    "type" : "array",
                    "items" : { "type" : "string" }
                },
            }
        }

        # Validate the data with schema
        validate(data, schema)



    def handle(data):
        ''' Handles data and returns the response for categories '''
        
        # Creating url
        url = bestbuy.PRODUCTS_PATH

        # TODO -- use data to build url
        # TODO; Prepare the schema for products
        #   output:
        #       - image of computer
        #       -`name
        #       - rating
        #       - price
        #       - number of items
        #       - ability to sort by

        # Adds the API key and the JSON format 
        url += "?" + bestbuy.add_api_and_format("json")


        print("Final URL:", url)

        # Sends a GET request with the constructed url
        response = requests.get(url)

        # Returns the JSON object
        return response.json()
