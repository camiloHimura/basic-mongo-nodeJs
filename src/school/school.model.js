const mongoose = require("mongoose");
const schoolCollection = require("./school.schema");
const gCrud = require("../utils/gCrud")

const school = mongoose.model("school", schoolCollection);

module.exports = gCrud(school);