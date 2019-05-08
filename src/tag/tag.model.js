const mongoose = require("mongoose");
const Log = require("../log/log.model");

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    color: {
        type: String,
        default: "2B4F7F"
    }
})

tagSchema.index({name: 1}, {unique: true})

//Hook Synchronous
tagSchema.post("save", async function() {
    await Log.create({action: "save", colum: "tag", value: this.name})
})

//Custom method
tagSchema.methods.similarName = function(cb) {
    console.log("calling similarName", this)
    return this.model('tag').find({ name: new RegExp(this.name,"gi") }, cb);
};

const Tag = mongoose.model("tag", tagSchema);

module.exports = Tag;
