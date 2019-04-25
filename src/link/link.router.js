const {Router} = require("express");
const {find, create, findOne, addTags,
        getAlls, findAndremove, findAndUpdate} = require("./link.controller");

const LinkRouter = Router();

LinkRouter.route("/")
    .get(getAlls)
    .post(create)
    .delete(findAndremove)
    
LinkRouter.route("/:id")
    .get(findOne)
    .put(findAndUpdate)

LinkRouter.route("/:id/addTags")
    .put(addTags)

LinkRouter.route("/find")
    .post(find)

module.exports = LinkRouter; 
