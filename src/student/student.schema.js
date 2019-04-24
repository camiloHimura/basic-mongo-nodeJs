const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
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

const Student = mongoose.model("student", studentSchema);
Student.create()
module.exports = Student;
