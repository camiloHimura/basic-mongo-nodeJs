const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true,
        unique: true
    },
    likes: [
        {type: String},
    ],    
    info: {
        schools: {
            type: String
        },
        age: {
            type: Number
        }
    }        
}) 