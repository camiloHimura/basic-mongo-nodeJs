const {Router} = require("express");
const {findOne, getAlls} = require("./log.controller");

const LogåRouter = Router();

LogåRouter.route("/")
    .get(getAlls)

LogåRouter.route("/:name")
    .get(findOne)

module.exports = LogåRouter; 
