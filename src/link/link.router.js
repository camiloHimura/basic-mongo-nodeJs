const {Router} = require("express");
const {findWithTags, create, findOne, addTags, greater, greaterEqual, inArray, 
    less, noEqual, lessEqual, getAlls, findAndremove, findAndUpdate} = require("./link.controller");

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
    
LinkRouter.route("/find/withTags")
    .get(findWithTags)

LinkRouter.route("/find/greater")
    .post(greater)

LinkRouter.route("/find/greaterequal")
    .post(greaterEqual)

LinkRouter.route("/find/less")
    .post(less)

LinkRouter.route("/find/lessEqual")
    .post(lessEqual)

LinkRouter.route("/find/inarray")
    .post(inArray)

LinkRouter.route("/find/noEqual")
    .post(noEqual)
    

module.exports = LinkRouter; 
