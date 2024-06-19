const express = require('express');
const dotevn = require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/contacts', (req,res) => {
    res.json("Hi from GET Method");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})