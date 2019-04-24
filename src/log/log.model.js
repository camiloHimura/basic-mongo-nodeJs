const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    action: String,
    colum: String,
    value: String | Date | Number,
    date: {
      type: Date,
      default: Date.now()
    }
})

logSchema.index({
  action: 1,
  date: 1
}, {
  unique: true
})

const log = mongoose.model("log", logSchema);
module.exports = log;