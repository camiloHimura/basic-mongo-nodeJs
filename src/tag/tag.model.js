const mongoose = require("mongoose");
const Log = require("../log/log.model");

const tagSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

tagSchema.index({name: 1}, {unique: true})

//Hook Synchronous
tagSchema.post("save", async function() {
    await Log.create({action: "save", colum: "tag", value: this.name})
})

const Tag = mongoose.model("tag", tagSchema);

module.exports = Tag;
