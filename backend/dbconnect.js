require('dotenv').config();
const mongoose = require('mongoose');

const dbconnect = async() => {
    try{
        const URI = process.env.MONGO_URI;
        const dbconnection = await mongoose.connect(URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Database Connection Eatablished');
    } catch(error) {
        console.log(error);
    }
};

module.exports = dbconnect;