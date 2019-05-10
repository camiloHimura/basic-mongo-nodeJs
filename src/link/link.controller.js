const Link = require("./link.model");
const errorHandle = require("../utils/errorHandler");
const greaterEqual = require("../utils/greaterEqual");
const greater = require("../utils/greater");
const inArray = require("../utils/inArray");
const less = require("../utils/less");
const lessEqual = require("../utils/lessEqual");
const noEqual = require("../utils/noEqual");

const gCrud = require("../utils/gCrud");

const format = data => {
    let {_id,name, url, tags, numTags, version} = data;
    tags = tags.map(({_id, name}) => ({id: _id, name}));
    return {id: _id, name, url, tags, numTags, version};
};

const arrayFormat = data => data.reduce((accum, current) => [...accum, format(current)], []);

module.exports = {  ...gCrud(Link, {format,arrayFormat}),
                    
                    less: less(Link, {format,arrayFormat}),
                    greater: greater(Link, {format,arrayFormat}),
                    inArray: inArray(Link, {format,arrayFormat}),
                    noEqual: noEqual(Link, {format,arrayFormat}),
                    lessEqual: lessEqual(Link, {format,arrayFormat}),
                    greaterEqual: greaterEqual(Link, {format,arrayFormat}),
                    
                    find: async (req, res) => {
                        try{
                            let data = await Link.findOne({_id: req.params.id})
                                                .populate("tags").exec();

                            if(!data){ return res.status(400).end() }

                            res.status(200).send(format(data));
                        }catch(error){
                            errorHandle(error, res);
                        }
                    },
                    
                    findOne: async (req, res) => {
                        try{
                            let data = await Link.findOne({_id: req.params.id})
                                                .populate("tags").exec();

                            if(!data){ return res.status(400).end() }

                            res.status(200).send(format(data));
                        }catch(error){
                            errorHandle(error, res);
                        }
                    },
                    
                    findAndUpdate: async (req, res) => {
                        try{
                            let newData = {...req.body};
                            let data = await Link.findOneAndUpdate({_id: req.params.id}, newData, {new: true})
                                            .exec();

                            if(!data){ return res.status(304).end() }
                    
                            res.status(200).send({status: "updated", data: format(data)});
                        }catch(error){
                            errorHandle(error, res);
                        }
                    },

                    addTags: async (req, res) => {
                        try{
                            let {tags: newTags = []} = req.body;

                            let data = await Link.findOneAndUpdate({_id: req.params.id}, 
                                                                    {$push: {tags: {$each: newTags}}}, 
                                                                    {new: true})
                                            .exec();

                            if(!data){ return res.status(304).end() }
                    
                            res.status(200).send({status: "updated", data: format(data)});
                        }catch(error){
                            errorHandle(error, res);
                        }
                    },
                    greater: async (req, res) => {
                        try{
                            let {num = 0} = req.body;
                            let data = await Link.find({ version: { $gt: num}}).exec();

                            if(!data){ return res.status(304).end() }
                    
                            res.status(200).send(arrayFormat(data));
                        }catch(error){
                            errorHandle(error, res);
                        }
                    },
                };