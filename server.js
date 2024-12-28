const express = require('express');
const youtubedl = require('youtube-dl-exec');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Route to get MP3 URL
app.get('/get-mp3', async (req, res) => {
    const videoUrl = req.query.url;

    if (!videoUrl) {
        return res.status(400).send({ error: 'YouTube URL is required.' });
    }

    try {
        const output = await youtubedl(videoUrl, {
            format: 'bestaudio',
            getUrl: true, // Get the direct URL of the audio stream
        });

        res.send({
            mp3Url: output,
        });
    } catch (error) {
        console.error('Error:', error.stderr || error.message);
        res.status(500).send({ error: 'Failed to process the YouTube URL. Please try again later.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});