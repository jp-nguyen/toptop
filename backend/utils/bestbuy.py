from dotenv import load_dotenv
import os
''' Library for interacting with the Best Buy API '''

load_dotenv()

# Here are the necessary strings and paths for the Best Buy API calls.
# We will be utilizing the Products and the Categories API.
API_KEY         = os.getenv("API_KEY") 
CATEGORIES_PATH = "https://api.bestbuy.com/v1/categories"
PRODUCTS_PATH   = "https://api.bestbuy.com/v1/products"

def add_api_and_format(form):
    ''' Returns a string with the API key and specified form '''
    return "&apiKey=" + API_KEY + "&format=" + form

def add_output_format(attrs):
    ''' Returns a string for the format of the JSON output given a list '''
    return "&show=" + ','.join(attrs)