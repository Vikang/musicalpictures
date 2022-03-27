import os
import requests
from dotenv import load_dotenv
load_dotenv()
key = os.getenv('GIMG_KEY')
cx = os.getenv('CX')
def lyrictoimage(text):
    newtext = text.split()
    for i in newtext:
        response = requests.get("https://www.googleapis.com/customsearch/v1?key="+key+"&cx="+cx+"&q="+i+"&searchType=image&num=1")
        print(response.status_code)
        data = response.json()
        print(data['items'][0]['link'])