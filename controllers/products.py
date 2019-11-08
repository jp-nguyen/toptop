from base import Controller
import bestbuy
import requests
''' Contains the controller for the products endpoint '''

class ProductsController(Controller):
    ''' Class definition of a controller for products using the Products API. '''

    def handle(data):
        ''' Handles data and returns the response for categories '''
        
        # Creating url
        url = bestbuy.PRODUCTS_PATH

        # Adds the API key and the JSON format 
        url += "?" + bestbuy.add_api_and_format("json")

        print("Final URL:", url)

        # Sends a GET request with the constructed url
        response = requests.get(url)

        # Returns the JSON object
        return response.json()
