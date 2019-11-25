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
        # Prepare the schema for products
        schema = {
            "type" : "object",
            "required": ["desktop", "laptop", "minPrice", "maxPrice"],
            "properties" : {
                "desktop" : { "type" : "boolean" },
                "laptop" : { "type" : "boolean" },
                "minPrice" : { "type" : "number" },
                "maxPrice" : { "type" : "number" },
                "manufacturers" : { 
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
 
    def get_categories(isDesktop, isLaptop):
        ''' Returns a string to specify desktop and/or laptop '''
        desktop_id = ProductsController.desktop_id
        laptop_id = ProductsController.laptop_id

        attr = "("
        if isDesktop and isLaptop:
            attr += "categoryPath.id={}|categoryPath.id={}".format(desktop_id, laptop_id)
        elif isDesktop:
            attr += "categoryPath.id=" + desktop_id
        else:
            attr += "categoryPath.id=" + laptop_id
        attr += ")"

        return attr
    
    def get_features(keywords):
        ''' Returns a string with all the features '''
        attr = ""
        numKeywords = len(keywords)

        if numKeywords > 0:
            attr += "&("

            for k in keywords:
                attr += "search=" + k
                numKeywords -= 1
                if numKeywords > 0:
                    attr += "|"

            attr += ")"

        return attr
    
    def get_manufacturers(manList):
        ''' Returns a string with all the manufacturers '''
        attr = ""
        numMan = len(manList)

        if numMan > 0:
            attr = "&("

            for m in manList:
                attr += "manufacturer=" + m
                numMan -= 1
                if numMan > 0:
                    attr += "|"

            attr += ")"
        
        return attr
    
    def get_price_range(minPrice, maxPrice):
        ''' Returns a string with the given price range inclusive '''
        # Check the minimum price is a non-negative number
        if minPrice < 0:
            minPrice = 0

        # Add the conditional for minimum price
        attr = "&(salePrice>=" + str(minPrice)

        # Add the conditional for maximum price only if the max is legitimate
        if maxPrice >= minPrice:
            attr += "&salePrice<=" + str(maxPrice)
        
        # Finish the attribute string
        attr += ")"

        # Return the string
        return attr

    def handle(data):
        ''' Handles data and returns the response for categories '''

        # Creating url
        url = bestbuy.PRODUCTS_PATH

        # Preparing for attributes
        url += "("
<<<<<<< HEAD
=======

        # Get desktop and/or laptop
        url += ProductsController.get_categories(data["desktop"], data["laptop"])
        
        # Get all the features specified (if any)
        try:
            url += ProductsController.get_features(data["features"])
        except KeyError:
            print("No additional keywords specified")

        # Get all the manufacturers specified (if any)
        try:
            url += ProductsController.get_manufacturers(data["manufacturers"])
        except KeyError:
            print("No manufacturer specified")

        # Get the price range (if set)
        url += ProductsController.get_price_range(data["minPrice"], data["maxPrice"])
        
        # Finishing attributes
        url += ")"
>>>>>>> 70748f875a53de11f6f3d5593ceb333a0e4902d1

        # Get desktop and/or laptop
        url += ProductsController.get_categories(data["desktop"], data["laptop"])
        
        # Get all the features specified (if any)
        try:
            url += ProductsController.get_features(data["features"])
        except KeyError:
            print("No additional keywords specified")

<<<<<<< HEAD
        # Get all the manufacturers specified (if any)
        try:
            url += ProductsController.get_manufacturers(data["manufacturers"])
        except KeyError:
            print("No manufacturer specified")

        # Get the price range (if set)
        url += ProductsController.get_price_range(data["minPrice"], data["maxPrice"])
=======
        # Adds the output format
        attrs = [
            "bestSellingRank",
            "customerReviewAverage",
            "customerReviewCount",
            "description",
            "manufacturer",
            "name",
            "salePrice",
            "shortDescription",
            "thumbnailImage",
            "url"
        ]

        url += bestbuy.add_output_format(attrs)
>>>>>>> 70748f875a53de11f6f3d5593ceb333a0e4902d1
        
        # Finishing attributes
        url += ")"

        # Adds the output format
        attrs = [
            "bestSellingRank",
            "customerReviewAverage",
            "customerReviewCount",
            "description",
            "manufacturer",
            "name",
            "salePrice",
            "shortDescription",
            "thumbnailImage",
            "url"
        ]

        url += bestbuy.add_output_format(attrs)

        # Adds the API key and the JSON format 
        url += bestbuy.add_api_and_format("json")

        print("Final URL:", url)
        # Sends a GET request with the constructed url
        response = requests.get(url)

        # Returns the JSON object
        return response.json()

