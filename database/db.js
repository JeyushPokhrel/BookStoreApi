const mongoose = require('mongoose');

const connectToDb = async() => {
    try {   
        await mongoose.connect.env
        console.log('mongoodb is connected successfully');
        }
        catch (error) {
        console.error('Mongodb connection failed ',error);
        process.exit(1);
    }
};
module.exports = connectToDb;

