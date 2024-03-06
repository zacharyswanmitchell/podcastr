const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const podcastFeedParser = require("podcast-feed-parser");
require("dotenv").config();

// Connect to the database
require("./config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

const syskURL = "https://omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/A91018A4-EA4F-4130-BF55-AE270180C327/44710ECC-10BB-48D1-93C7-AE270180C33E/podcast.rss";

// Put API routes here, before the "catch all" route
app.get("/sysk", async (req, res) => {
	try {
		const podcast = await podcastFeedParser.getPodcastFromURL(syskURL);
		console.log('Fetched and parsed RSS feed:server:', podcast.meta.title);
    res.json(podcast);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error fetching RSS feed" });
	}
});

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
	console.log(`Express app running on port ${port}`);
});
