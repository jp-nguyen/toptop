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

    def urlBuilder(flag, keywords, manList, minPrice, maxPrice):

        #The API returns a list of dictionaries. Here is one dictionary that is obtained by querying data["products"]

    """{'bestSellingRank': None,
                   'customerReviewAverage': None,
                   'customerReviewCount': None,
                   'description': None,
                   'manufacturer': 'Apple',
                   'name': 'Apple - Mac mini Desktop - Intel Core i7 - 16GB Memory '
                           '- 128GB Solid State Drive - Space Gray',
                   'salePrice': 1399.99,
                   'shortDescription': 'Mac OS Mojave 10.14Technical details: 8th '
                                       'Gen Intel&#174; Core&#8482; i7-8700B '
                                       'processor; 16GB memory; 128GB solid state '
                                       'driveSpecial features: built-in wireless '
                                       'networking; Bluetooth; HDMI output',
                   'thumbnailImage': 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6335/6335960_s.gif',
                   'url': 'https://api.bestbuy.com/click/-/6335960/pdp'}"""

        #I assume that flag is passed in as an int. 0 represents Laptop. 1 represents Desktop. 2 represents both.
        if flag == 0:        
            pcCode = "(categoryPath.id=abcat0502000))?"
        elif flag == 1:
            pcCode = "(categoryPath.id=abcat0501000))?"
        else:
            pcCode = "(categoryPath.id=abcat0501000|categoryPath.id=abcat0502000))?"
        #I assume keywords is one string seperated by spaces, as shown in the mockup
        numKeywords = len(keywords)
        customString = ""
        if len(keywords) > 0:
            customString = "("
            for k in keywords:
                customString += "search=" + k
                numKeywords -= 1
                if numKeywords > 0:
                    customString += "|"
            customString += ")"
        if customString != "":
            customString += "&"
        #I assums manList is a list of strings of manufacturers
        manString = ""
        if len(manList)!=0:
            numMan = len(manList)
            manString = "("
            for x in manList:
                numMan -= 1
                manString += "manufacturer=" + x
                if numMan > 0:
                    manString += "|"
            manString += ")"
        

        url = "https://api.bestbuy.com/v1/products("
        if len(customString) != 0:
            url += customString
        
        url += manString
        url += "&salePrice>" + str(minPrice) + "&"
        url += "salePrice<" + str(maxPrice)

        url += "&"

        url += pcCode
        
        url +=  "apiKey=E5at6CJJJDG7kfjwoDgEByJ4&sort=bestSellingRank.asc&"\
                "show=bestSellingRank,customerReviewAverage,customerReviewCount,"\
                "description,manufacturer,name,salePrice,shortDescription,thumbnailImage,url&format=json"
        
        response = requests.get(url)
        data = response.json()
        return data
    
