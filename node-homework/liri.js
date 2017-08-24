require('dotenv').config();

var a= process.argv[2];
var b = process.argv[3];


//If else statements to get first item
if(a === "my-tweets"){

	var twitter = require("twitter");
	var client = new twitter({
	  consumer_key: process.env.TWITTER_CONSUMER_KEY,
	  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
	});
	var params = {
		q: "latest",
		count: 15

	}	

	client.get('search/tweets',params, function(error, data, response) {
	  if(error) throw error;

	  var tweets= data.statuses;
	  for ( var i=0; i< tweets.length;i++){
	  	console.log("--------------------------")
	  	console.log(JSON.stringify(tweets[i].text));
	  }
	  // console.log(response);   
	});

;
	

}
else if(a === "spotify-this-song"){
	// var Spotify = require('node-spotify-api');
 
	// var spotify = new Spotify({
	//   id: process.env.SPOTIFY_ID,
	//   secret: process.env.SPOTIFY_SECRET
	// });

	// spotify.search({ type: 'track', query: b }, function(err, data) {
	//   if (err) {
	//     return console.log('Error occurred: ' + err);
	//   }
	 
	// console.log(data); 
	// });
	var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
	var spotifyApi = new SpotifyWebApi({
	  clientId : process.env.SPOTIFY_ID,
	  clientSecret : process.env.SPOTIFY_SECRET,
	});



	console.log("you typed in spotify")
	}
	else if(a === "do-what-it-says"){

		console.log("aight mate")
	}
	else{
		console.log("you typed nothing")
	}