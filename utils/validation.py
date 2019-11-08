from jsonschema import validate 
''' Library for validating POST requests '''

def validate_data(data, schema):
    ''' Validates data given schema. Will raise ValidationError if invalid. '''
    # Validate with the schema
    validate(data, schema)

    # If no error thrown, data is valid.
    print("Validated :)")

def validate_categories_request(data):
    ''' Validates the POST request for the categories endpoint. '''

    # Prepare the schema for categories
    schema = {
        "type" : "object",
        "required" : ["name"],
        "properties" : {
            "name" : { "type" : "string" },
            "pageSize" : { "type" : "number" },
            "page" : { "type" : "number" }
        }
    }

    return validate_data(data, schema)