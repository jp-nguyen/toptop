from base import Controller
from jsonschema import validate
import bestbuy
import requests
import sys
sys.path.append("../utils")
''' Contains the controller for the products endpoint '''

class ProductsController(Controller):
    ''' Class definition of a controller for products using the Products API. '''

    desktop_id = "abcat0501000"
    laptop_id = "abcat0502000"

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

        # TODO: go through data to add to the url

        # Adds the question mark for query parameters
        url += "?"

        # Adds the output format
        url += "&show=image,name,bestSellingRank,regularPrice"
        
        # Adds the API key and the JSON format 
        url += bestbuy.add_api_and_format("json")

        print("Final URL:", url)

        # Sends a GET request with the constructed url
        response = requests.get(url)

        # Returns the JSON object
        return response.json()
