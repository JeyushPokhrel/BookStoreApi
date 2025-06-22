const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, ' Book title is required'],
        trim : true,
        maxLength : [100, 'Book title can not be more than 100 characters'],
    },
    Author: {
        type : String,
        required : [true, ' Author name is required'],
        trim : true,
        maxLength : [100, 'Book title can not be more than 100 characters'],
    },
    Year : {
        type : String,
        required : [true, ' Publication year is required'],
        trim : true,
        min : [1000, 'Year must be at least 1000'],
        max : [new Date().getFullYear(),'Year cannot be in the future'],
        
    },
    createdAt: {
        type: Date,
        default: Date.now

    },
    
});
module.exports = mongoose.model('book',bookSchema);
