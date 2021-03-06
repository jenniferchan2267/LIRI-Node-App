require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var fs = require("fs");
var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var value = process.argv[3];
var defaultMovie = "Mr. Nobody";

switch (action) {
  case "concert-this":
    getBands(value)
    break;
  case "spotify-this-song":
    getSongs(value)
    break;
  case "movie-this":
    if (value == "") {
      value = defaultMovie;
    }
    getMovies(value)
    break;
  case "do-what-it-says":
    doWhatItSays()
    break;
  default:
    console.log("Choose one of the following commands: \nconcert-this <artist>, \nspotify-this-song <song name>, \nmovie-this <movie title>, \ndo-what-it-says")
    break;
}

//concert-this
function getBands(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
      .then(function (response) {
        console.log("--------------------------------------------------------------------------------");
        console.log("Name of the venue:", response.data[0].venue.name);
        console.log("Venue location:", response.data[0].venue.city);
        var eventDate = moment(response.data[0].datetime).format('MM/DD/YYYY');
        console.log("Date of the Event:", eventDate);
       
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //spotify-this-song 
  function getSongs(songName) {
    if (songName === "") {
      songName = "The Sign";
    }
  
    spotify.search({ type: 'track', query: songName }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      console.log("--------------------------------------------------------------------------------");
      console.log("Artists: ", data.tracks.items[0].album.artists[0].name)
      console.log("Song Name: ", data.tracks.items[0].name)
      console.log("Preview Link: ", data.tracks.items[0].preview_url)
      console.log("Album Name: ", data.tracks.items[0].album.name)
    });
  }

  //movie-this 
  function getMovies(movieName) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"
    axios.get(queryUrl)
        .then(function (response) {
           var movieResults =  (
               "Title: " + response.data.Title +
               "\nYear Released: " + response.data.Released +
               "\nIMDB Rating: " + response.data. imdbRating +
               "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
               "\nCountry Produced: " + response.data.Country +
               "\nLanguage: " + response.data.Language +
               "\nPlot: " + response.data.Plot +
               "\nActors/Actresses: " + response.data.Actors
           )
            console.log("--------------------------------------------------------------------------------");
            console.log (movieResults)

        })
        .catch(function (error) {
            console.log(error);
        })
}

//do-what-it-says 
function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function (err, data) {
    data = data.split(",");
    var action = data[0]
    var value = data[1]
    // getSongs(value)
    switch (action) {
      case "concert-this":
        getBands(value)
        break;
      case "spotify-this-song":
        getSongs(value)
        break;
      case "movie-this":
        getMovies(value)
        break;
      default:
        console.log("Choose one of the following commands: \nconcert-this <artist>, \nspotify-this-song <song name>, \nmovie-this <movie title>, \ndo-what-it-says")
        break;
    }
  });
}