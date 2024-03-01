const express = require('express');
const router = express.Router();
let Parser = require('rss-parser');
let parser = new Parser();

router.get('/', async (req, res) => {
    try {
        let feed = await parser.parseURL('https://omnycontent.com/d/playlist/e73c998e-6e60-432d-86e5-a7f5004d67fb/2b3c4b53-48d6-4e9c-9a9e-ac7900e4e3b0/5f7b5cda-9679-4513-9e38-ac7900e4e3c2/podcast.rss');
        res.json(feed.items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching RSS feed' });
    }
});

module.exports = router;