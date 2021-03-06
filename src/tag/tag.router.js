const {Router} = require("express");
const {find, create, findOne, getAlls, findAndremove, findEqual,
    findAndUpdate, similarName} = require("./tag.controller");

const TagRouter = Router();

TagRouter.route("/find")
    .post(find)

TagRouter.route("/find/similar")
    .post(similarName)

TagRouter.route("/:id")
    .get(findOne)
    .put(findAndUpdate)

TagRouter.route("/")
    .get(getAlls)
    .post(create)
    .delete(findAndremove)

TagRouter.route("/find/equal")
    .post(findEqual)

module.exports = TagRouter; 
