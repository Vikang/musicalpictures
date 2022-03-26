from get_songs import get_songs
from get_lyrics import getLyrics
songArtist = get_songs()
song = songArtist[0]
artist = songArtist[1]
print(getLyrics(song,artist))