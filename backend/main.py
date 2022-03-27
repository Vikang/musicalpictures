from .get_songs import get_song
from .get_lyrics import getLyrics
from .analyzeEntity import sample_analyze_syntax
from .get_images import lyrictoimage

#class ApiHandler(Resource):

    # def getRandomLyrics():
    #     songArtist = get_songs()
    #     song = songArtist[0]
    #     artist = songArtist[1]
    #     print(song)
    #     print(artist)

    #     lyrics = getLyrics(song,artist)
    #     print(lyrics)
    #     keywords = sample_analyze_syntax(lyrics)
    #     print(keywords)
    #     links = lyrictoimage(keywords)
    #     return (links, song, artist)

def get():
    songArtist = get_song()
    song = songArtist[0]
    artist = songArtist[1]

    links = lyrictoimage(song)
    #return (links,song,artist)
    return {
    'resultStatus': 'SUCCESS',
    'message': "Hello Api Handler",
    'links': links,
    'song': song,
    'artist': artist
    }

if __name__ == '__main__':
    get()
