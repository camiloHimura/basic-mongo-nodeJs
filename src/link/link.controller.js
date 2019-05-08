const Link = require("./link.model");
const errorHandle = require("../utils/errorHandler");

const gCrud = require("../utils/gCrud");

const format = data => {
    let {_id,name, url, tags, numTags} = data;
    tags = tags.map(({_id, name}) => ({id: _id, name}));
    return {id: _id, name, url, tags, numTags};
};

const arrayFormat = data => data.reduce((accum, current) => [...accum, format(current)], []);

module.exports = {  ...gCrud(Link, {format,arrayFormat}),

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
                            console.log("---- internal newData ----", newData)
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
                            console.log("req.params", req.params)
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
                    }
                };