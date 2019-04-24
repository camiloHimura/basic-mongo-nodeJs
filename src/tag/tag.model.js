const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

tagSchema.index({name: 1}, {unique: true})

const Tag = mongoose.model("tag", tagSchema);

module.exports = Tag;