const mongoose = require("mongoose");

const Tag  = require("./tag.model");
const gCrud = require("../utils/gCrud");

const format = data => {
    let {_id, name} = data; 
    return {id: _id, name}
}

const arrayFormat = data => data.reduce((accum, current) => [...accum, format(current)], [])

module.exports = gCrud(Tag, {format, arrayFormat})


