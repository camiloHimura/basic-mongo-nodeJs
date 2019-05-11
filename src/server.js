const express = require("express");

const cors = require("cors");
const connect = require("./connect");
const { json, urlencoded } = require("body-parser");

const tagRouter = require("./tag/tag.router")
const logRouter = require("./log/log.router")
const linkRouter = require("./link/link.router")

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/tag", tagRouter)
app.use("/api/log", logRouter)
app.use("/api/link", linkRouter)

module.exports = {
    start: async () => {
        try {
            await connect();
            console.log("----- connected -----");
            let result, school;
            app.listen(3000, () => console.log(`I'm node listen port 3000`))
            
            /*
            -search 
            result = await Student.findOne({firstName: "teo"}).populate("school").exec();
            
            
            -relationship
            result = await School.findOne({name: "Maria Cano"}).exec()
            result = await Student.create({firstName: "teo", school: result._id});
            */
           //console.log(result)
        }
        catch(e){
            console.log("----- Error -----");
            console.log(e);
        }
    }

}
