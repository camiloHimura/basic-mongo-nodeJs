const {Router} = require("express");
const {find, create, findOne, getById, 
        getAlls, findAndremove, findAndUpdate} = require("./tag.controller");

const TagRouter = Router();

TagRouter.route("/")
    .get(getAlls)
    .post(create)
    .delete(findAndremove)
    
TagRouter.route("/:id")
    .get(findOne)
    .put(findAndUpdate)

module.exports = TagRouter; 
