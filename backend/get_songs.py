import json
import random
import requests
from dotenv import load_dotenv
import os
load_dotenv()

def get_songs():
    numOfPages = str(1)

    key= os.getenv('FM_KEY')

    response = requests.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key="+ key + "&format=json&page=" + numOfPages)
    value = response.json()

    trackNo = random.randint(0, len(value["tracks"]["track"]))

    songName = value["tracks"]["track"][trackNo]["name"]
    artist = value["tracks"]["track"][trackNo]["artist"]["name"]
    return (songName, artist)

#code to store response as a json, use so u dont have to call api multiple times
# # Opening JSON file
# with open('sample.json', 'w') as openfile:
#     json.dump(value, openfile)


# with open('sample.json') as json_file:
#     value = json.load(json_file)
#     print())