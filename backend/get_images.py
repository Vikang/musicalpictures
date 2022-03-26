import requests
from dotenv import load_dotenv
import os
load_dotenv()

key = os.getenv('GIMG_KEY')
cx = os.getenv('CX')
def lyrictoimage(text):
    newtext = text.split()
    res = []
    for i in newtext:
        response = requests.get("https://www.googleapis.com/customsearch/v1?key="+key+"&cx="+cx+"&q="+i+"&searchType=image&num=1")
        #print(response.status_code)
        data = response.json()
        res+=[data['items'][0]['link']]
    return res

lyrictoimage("apple father job")