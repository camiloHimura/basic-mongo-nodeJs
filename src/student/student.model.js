const mongoose = require("mongoose");
const studentCollection = require("./student.collection");

const Student = mongoose.model("student", studentCollection);

module.exports = Student;