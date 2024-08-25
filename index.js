const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    let numbers = [];
    let alphabets = [];
    let highest_lowercase = '';

   
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
            
            if (item === item.toLowerCase() && (!highest_lowercase || item > highest_lowercase)) {
                highest_lowercase = item;
            }
        }
    });

   
    const is_success = true;
    const user_id = "john_doe_17091999";
    const email = "john@xyz.com";
    const roll_number = "ABCD123";

    
    const final_lowercase_alphabet = highest_lowercase ? [highest_lowercase] : [];

   
    res.json({
        is_success: is_success,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: final_lowercase_alphabet
    });
});

app.get('/bfhl', (req, res) => {
    
    res.json({ operation_code: 1, message: "This is a simple GET endpoint with no inputs." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
