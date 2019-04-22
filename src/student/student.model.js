const mongoose = require("mongoose");
const studentCollection = require("./student.schema");

const Student = mongoose.model("student", studentCollection);

module.exports = Student;