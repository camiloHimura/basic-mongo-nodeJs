const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    version: {
        type: Number,
        default: 1
    },
    url: {
        type: String,
        require: true
    },
    tags: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "tag"
        }],
})

linkSchema.index({
  name: 1,
  url: 1,
  version: 1
}, {
  unique: true
})

//Query Helpers
linkSchema.query.fillTags = function(){
    return this.populate("tags");
}

//Virtual
linkSchema.virtual("numTags")
    .get(function(){
            return this.tags.length
        })

//Hook
linkSchema.pre("save", function(){
            let firstLetter = this.name.trim().slice(0,1).toUpperCase();
            let temName = [...this.name];
            temName[0] = firstLetter;

            this.name = temName.join("");
        })


module.exports = mongoose.model("link", linkSchema);
