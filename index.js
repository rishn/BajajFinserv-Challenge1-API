const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const app = express();
const port = process.env.PORT || 3500;

app.use(cors(corsOptions));

app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: 'Invalid data format' });
    }

    const numbers = data.filter(item => !isNaN(item) && item.trim() !== '');
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const highestLowercaseAlphabet = alphabets
        .filter(item => item === item.toLowerCase())
        .sort()
        .pop() || '';

    const response = {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    };

    res.json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
