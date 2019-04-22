const mongoose = require("mongoose");
const studentCollection = require("./student.schema");
const gCrud = require("../utils/gCrud")

const Student = mongoose.model("student", studentCollection);

module.exports = gCrud(Student);