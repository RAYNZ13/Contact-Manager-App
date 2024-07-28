const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const { connect } = require('mongoose');
const connectDB = require('./config/dbConnections');
const dotevn = require('dotenv').config();

connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require('./routes/contactRoutes'));
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})