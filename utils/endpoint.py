''' Library to do requests '''

def error(message):
    ''' Returns a map with an error message '''
    return {
        "message" : message,
        "resultCode" : -1
    }

def post(request, controller):
    ''' Takes a request and a controller. '''

    # Retrieve data from request as a JSON
    data = request.get_json()

    # Pass data into the handle 
    return controller.handle(data)