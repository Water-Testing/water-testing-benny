const mongoose = require('mongoose');
const config = require('config');
const mongodb = config.get('MongoDB');
//set URI in default.json

const connectDB = async () => {

try{
    await mongoose.connect(mongodb);

    console.log('MongoDB Connected...');
} catch (err) { 
    console.error(err.message);
    process.exit(1);
}
}

module.exports = connectDB;