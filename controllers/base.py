from abc import ABC, abstractmethod
''' Contains the base controller '''

class Controller(ABC):
    ''' Abstract Class definition of a controller that handles logic. '''

    @staticmethod
    @abstractmethod
    def handle(data):
        ''' Takes in data and returns a JSON response. '''
        pass