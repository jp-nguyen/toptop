from flask import request, Flask
import json
import sys

sys.path.append("./controllers")
sys.path.append("./utils")

from endpoint import post
from categories import CategoriesController
from products import ProductsController

'''
    This is the main backend application for our website that will allow
    users to go through a workflow to find a suitable laptop/desktop. We
    will be utilizing the Best Buy API to do so.
'''
app = Flask(__name__)
#this is a test

##### CATEGORIES API #####

@app.route("/categories", methods = ["POST"])
def categories():
    ''' Calls the Categories API and returns based on certain parameters '''
    return post(request, CategoriesController)

##### PRODUCTS API #####

@app.route("/products", methods = ["POST"])
def products():
    ''' Calls the Products API and returns based on certain parameters '''
    return post(request, ProductsController)

##### MAIN #####

if __name__ == "__main__":
    print("I DON'T KNOW HOW TO LOG: Running backend server for TopTop.")
    app.run(debug = True) # We will not be running this in prod
