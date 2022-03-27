from flask import Flask, send_from_directory
from backend.main import get

app = Flask(__name__)

@app.route("/game")
def game():
    return get()

if __name__ == "__main__":
    app.run(debug=True)