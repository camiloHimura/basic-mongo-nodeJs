const mongoose = require("mongoose");

module.exports = {
    run() {
        return mongoose.connect("mongodb://localhost:27017/basicMongo", { useNewUrlParser: true })
    }
}