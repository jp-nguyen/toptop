from flask import request, Flask, redirect, url_for, render_template, jsonify
import json

'''
    This is the main backend application for our website that will allow
    users to go through a workflow to find a suitable laptop/desktop. We
    will be utilizing the Best Buy API to do so.
'''

app = Flask(__name__)

if __name__ == "__main__":
    print("Running application.")
    app.run(debug = True) # We will not be running this in prod
