from get_songs import get_songs
from get_lyrics import getLyrics
from analyzeEntity import sample_analyze_syntax
from get_images import lyrictoimage
import webbrowser

def getRandomLyrics():
    songArtist = get_songs()
    song = songArtist[0]
    artist = songArtist[1]
    print(song)
    print(artist)

    lyrics = getLyrics(song,artist)
    print(lyrics)
    keywords = sample_analyze_syntax(lyrics)
    print(keywords)
    links = lyrictoimage(keywords)
    return (links, song, artist)
    
def getRandomTitle():
    songArtist = get_songs()
    song = songArtist[0]
    artist = songArtist[1]

    links = lyrictoimage(song)
    return (links,song,artist)

