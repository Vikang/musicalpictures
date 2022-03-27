from flask import Flask, render_template, send_from_directory, request, jsonify, current_app, redirect, url_for
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from backend.main import get, getRandomLyrics

app = Flask(__name__)
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/game", methods = ['GET', 'POST'])
def game():
    #if request.method=="POST":
    #   username = request.form.get("username", "")
    #    print(username)
    #    return render_template("game.html")

    return get()


@app.route("/gameLyrics", methods = ['GET', 'POST'])
def gameLyrics():
    #if request.method=="POST":
    #   username = request.form.get("username", "")
    #    print(username)
    #    return render_template("game.html")

    return getRandomLyrics()

if __name__ == "__main__":
    app.run(debug=True)