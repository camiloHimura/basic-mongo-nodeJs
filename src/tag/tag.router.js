const {Router} = require("express");
const {find, create, findOne, getById, 
        getAlls, findAndremove, findAndUpdate} = require("./tag.controller");

const TagRouter = Router();

TagRouter.route("/")
    .get(getAlls)
    .post(create)
    .put(findAndUpdate)
    .delete(findAndremove)
    
TagRouter.route("/:name")
    .get(findOne)

module.exports = TagRouter; 
