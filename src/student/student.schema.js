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
    school: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "school"
    },        
}) 