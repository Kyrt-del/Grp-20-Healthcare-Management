const express = require('express');
const mongoose = require('mongoose');
const dbconnect = require('./dbconnect');
const cors = require('cors');
const Patient = require('./Models/patient');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

dbconnect(); // connect to the database

app.get('/', (req, res) => {
    res.send('Hello');
}); 

// Routes
const patientRouter = require('./Routes/patient');

app.use('/patient', patientRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});