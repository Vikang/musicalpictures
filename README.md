# Musical Pictures
A game where you guess the song with images

![Screenshot_2022-03-27_050635](https://user-images.githubusercontent.com/4513787/160274781-a38dc031-39d8-42e7-a5e7-a94ac78f9e8e.png)

# Inspiration
The idea for Musical Pictures stemmed from another project where text to images was utilized. We wanted to build our own product using the same concept but in a different scenario.
# What it does
Musical Pictures is a game designed for players to try and guess the song title given a set of displayed images. The images represent the song lyrics of any song. Players can restrict songs for certain genres and artists to make the game easier. 
# How we built it
When building Musical Pictures, the following APIs were leveraged: Last.fm API,  Musixmatch, Google Analyze Entity, Google Custom JSON API. The last.fm API was used to find a list of song names and artist names. The list of song names were then inputted into Musixmatch API to generate lyrics for the given song and artist. The lyrics were then transferred into Google Analyze Entity to help identify keywords to turn into images. The outputted keywords were entered into Google Custom JSON API to find images to display. Photoshop was also used in the front end to create the visuals.
# Challenges we ran into
Being complete beginners to building a product, it was a learning process to get everything connected from the backend to the frontend. In the backend, a lot of time was spent to find suitable free APIs to pull from and to help flow them into one another. Flask was also a big challenge for us as none of us had really used it before.
# Accomplishments that we're proud of
Coming out with a functional product and building both the back and front ends of the product was a great accomplishment for us. We are also proud of being able to generate individual images for each words in the lyrics of a song. Being able to build something with flask was also a great accomplishment as none of us had prior experience using it. Incorporating music to create audio visual experience to enhance gameplay was also an accompishment.
# What we learned
Typically, we only get to spend time in either the front or the backends, however this experience helped us to do more on both sides of the build. We also learned more about text to image as well as using the Flask Framework.
# What's next for Musical Pictures
To improve the product, we could use a better image finder API since the results from the API were not always the best match for a given word. The analyze entity API could also be improved on to give better keywords. A point system could also be added in the future to keep track of the number of correct responses. Finally, we can implement an audio file to play the song for the corresponding song.
