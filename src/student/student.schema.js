const mongoose = require("mongoose");

const student = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true,
        unique: true
    },
    likes: [
        {type: String},
    ],    
    school: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "school"
    },        
}) 

module.exports = student;