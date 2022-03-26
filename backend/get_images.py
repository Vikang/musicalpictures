import requests
key = "AIzaSyAjBuUJuCHPtMJHU2f3Bl7gV-zAPKmKWvE"
cx = "bbcd7060a08c5b884"
def lyrictoimage(text):
    newtext = text.split()
    for i in newtext:
        response = requests.get("https://www.googleapis.com/customsearch/v1?key="+key+"&cx="+cx+"&q="+i+"&searchType=image&num=1")
        print(response.status_code)
        data = response.json()
        print(data['items'][0]['link'])