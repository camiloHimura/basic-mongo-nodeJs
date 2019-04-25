const {Router} = require("express");
const {find, create, findOne, getAlls, findAndremove, findAndUpdate} = require("./tag.controller");

const TagRouter = Router();

TagRouter.route("/find")
    .post(find)

TagRouter.route("/:id")
    .get(findOne)
    .put(findAndUpdate)

TagRouter.route("/")
    .get(getAlls)
    .post(create)
    .delete(findAndremove)

module.exports = TagRouter; 
