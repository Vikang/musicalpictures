from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from backend.main import get

app = Flask(__name__)
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/game")
def game():
    return get()

if __name__ == "__main__":
    app.run(debug=True)