

// bug check to make sure file is accessible
console.log("The file keys.js is loaded.");


// variable to hold twitter API keys
var twitterKeys = {
  consumer_key: '<8ZxV3hxoHatzstmV3wN1ZOufs>',
  consumer_secret: '<4O7U0vz59JmCHpj77MFmWMlKjAfuWjbo1CYTu6BVJy3fuuOoqR>',
  access_token_key: '<	913210221803294725-5OLKzLZef8LprCPzlYbCtxw2zg27CDt>',
  access_token_secret: '<UUMUqlAZvHnjDnbdNHUMYx8GFVUOEXomCdKqdiaSs16JU>',
};

// variable to hold spotify API keys
var spotify = {
	client_ID: '<2f4bd4604d924717a5754de0ec6435be>'
	client_secret'<964513f557db4432878c9548fa8f4a48>'
};

// variable to hold omdb API key
var omdbKey = "40e9cece";



// module.exports is essentially an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.

module.exports = {
	twitterKeys: twitterKeys,
	spotifyID: spotifyKeys.ClientID,
	spotifySecret: spotifyKeys.ClientSecret,
	omdbKey: omdbKey,
}
