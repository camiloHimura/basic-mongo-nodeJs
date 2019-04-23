const mongoose = require("mongoose");

const school = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        unique: true
    },
    students: {
        type: Number,
        required: true
    },
    isMilitar: {
        type: Boolean,
        default: false
    },
    staff: [{type: String}]
})

//virtual:
school.virtual("staffCount")
    .get(function() { return this.staff.length})

module.exports = school;