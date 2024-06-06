const URL = require('../models/url');
const shortid = require('shortid');

const handlegenerateNewShortURL = async (req, res) => {
    const { longURL } = req.body;

    if (!longURL) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        let existingURL = await URL.findOne({ redirectURL: longURL });
        if (existingURL) {
            return res.redirect('/test');
        }

        const shortID = shortid.generate();
        const newURL = new URL({
            shortID,
            redirectURL: longURL,
            visitHistory: []
        });

        await newURL.save();
        res.redirect('/test'); // Redirect back to the home page after creating the short URL
    } catch (error) {
        console.error('Error creating short URL:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    handlegenerateNewShortURL
};
