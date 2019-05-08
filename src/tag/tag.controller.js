const mongoose = require("mongoose");

const Tag  = require("./tag.model");
const gCrud = require("../utils/gCrud");

const format = data => {
    let {_id, name, color} = data; 
    return {id: _id, name, color}
}

const arrayFormat = data => data.reduce((accum, current) => [...accum, format(current)], [])

module.exports = {...gCrud(Tag, {format, arrayFormat}),
                                        similarName: async (req, res) => {
                                            const nTag  = new Tag({name: req.body.name});
                                            nTag.similarName((err, info) => {
                                                if(err){reject(res.send(err))}
                                                res.send(info);
                                            });
                                        }
                }


