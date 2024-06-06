const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { handlegenerateNewShortURL } = require('./controllers/url');
const staticRoute = require("./routes/staticrouter");
const URL = require('./models/url');
const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database Connection
mongoose.connect('mongodb://localhost:27017/URLShortener')
    .then(() => console.log('MONGODB CONNECTED'))
    .catch(err => console.error('MONGO ERROR:', err));

app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));

// Function to add or update a visit
async function addOrUpdateVisit(url) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Get today's date without time

    let visitEntry = url.visitHistory.find(entry => {
        const visitedDate = new Date(entry.visitedDate);
        visitedDate.setHours(0, 0, 0, 0);
        return visitedDate.getTime() === today.getTime();
    });

    if (visitEntry) {
        // Update the visit count if an entry for today exists
        visitEntry.visitCount += 1;
    } else {
        // Add a new visit entry if no entry for today exists
        url.visitHistory.push({ visitedDate: new Date(), visitCount: 1 });
    }

    try {
        await url.save();
    } catch (error) {
        console.error('Error saving URL:', error);
        throw new Error('Error updating visit history');
    }
}

// Routes
app.get('/test', async (req, res) => {
    try {
        const allUrls = await URL.find({});
        return res.render("home", { urls: allUrls });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/url', handlegenerateNewShortURL);

app.get('/:shortID', async (req, res) => {
    const { shortID } = req.params;
    try {
        const entry = await URL.findOne({ shortID });
        if (entry) {
            // Update the visit history before redirecting
            await addOrUpdateVisit(entry);
            res.redirect(entry.redirectURL);
        } else {
            res.status(404).json({ error: 'Short URL not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.use("/", staticRoute);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
