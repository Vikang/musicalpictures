import requests
from dotenv import load_dotenv
import os
load_dotenv()

api_key = os.getenv('MUSICMIX_KEY')
def getLyrics(q_track, q_artist):
    q_track = q_track.strip()
    q_artist = q_artist.strip()
    # Replace All space (unicode is \\s) to %20
    q_track = q_track.replace(' ', "%20")
    q_artist = q_artist.replace(' ', "%20")

    response = requests.get("https://api.musixmatch.com/ws/1.1/matcher.lyrics.get&apikey="+api_key+"&q_track="+q_track+"&q_artist="+q_artist)
    #print(response.status_code)
    data = response.json()
    lyrics = data["message"]["body"]["lyrics"]["lyrics_body"]

    result = ""
    i = 0
    for line in lyrics.split('\n'):
        result += line + " "
        i += 1
    return result