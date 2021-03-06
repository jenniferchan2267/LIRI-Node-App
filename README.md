# LIRI-Node-App
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
# Commands
* `concert-this`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`
# APIs
* [Spotify](https://developer.spotify.com/)
* [OMDB](http://www.omdbapi.com)
* [Bands In Town](http://www.artists.bandsintown.com/bandsintown-api)
# NPM Packages
* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
* [Axios](https://www.npmjs.com/package/axios)
* [Moment](https://www.npmjs.com/package/moment)
* [DotEnv](https://www.npmjs.com/package/dotenv)
# How to Run LIRI-Bot
1. Clone the repository
2. Run command `npm i` in Terminal
3. `node liri.js <command> <query>`
## concert-this
* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")
### Screenshots:
![](https://github.com/jenniferchan2267/LIRI-Node-App/blob/master/image/liri-concert-this.jpg)
## spotify-this-song
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
### Screenshots:
![](https://github.com/jenniferchan2267/LIRI-Node-App/blob/master/image/liri-spotify-this.jpg)
## movie-this
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
### Screenshots:
![](https://github.com/jenniferchan2267/LIRI-Node-App/blob/master/image/liri-movie-this.jpg)
## do-what-it-says
* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
* It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
* Edit the text in random.txt to test out the feature for movie-this and concert-this.
### Screenshots:
![](https://github.com/jenniferchan2267/LIRI-Node-App/blob/master/image/liri-do-what-it-says.jpg)
