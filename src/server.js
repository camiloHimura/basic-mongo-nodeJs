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
            result = await School.find({ staff: {$in: ["b", "c"]} }).sort({students: 1}).exec();
            result = await Student.findOne({firstName: "teo"}).populate("school").exec();
            
            -Insert
            result = await School.create([{name: "José Maria", students: 100, isMilitar: true, staff: ["a", "b", "c"]}, 
            {name: "Pedro Nel", students: 200, isMilitar: true, staff: ["a", "b", "c", "d"]}, 
            result = await School.create({name: "Uniminuto", students: 500, staff:["c", "d"]})
            {name: "Escolme", students: 400, staff: ["a", "b", "c", "d"]},
            {name: "Ferrini", students: 400, staff: ["a", "b", "c", "d", "f"]}])
            
            - delete
            result = await School.deleteMany({students: {$gt: 100}}).exec();

            -Querys
            result = await Student.getById("5cbe257275036372881f1ca4")
            result = await School.find({students: {$gt: 100}}).exec();
            result = await Student.updateById("5cbe257275036372881f1ca4", {firstName: "camiloHimura"}))
            result = await School.find({students: {$gt: 100, $lt: 400}}).exec();
            result = await School.find({students: {$gt: 100, $lt: 400}, isMilitar: true}).exec();
            result = await School.find({staff: "d", isMilitar: true}).exec();
            result = await School.find({ staff: {$in: ["d", "f"]} }).exec();
            result = await School.find({ staff: {$in: ["d", "f"]} }).limit(2).exec();
            result = await School.find({ staff: {$in: ["b", "c"]} }).sort("+students").exec();
            result = await School.find({ staff: {$in: ["b", "c"]} }).sort("-students").exec();
            result = await School.find({ staff: {$in: ["b", "c"]} }).sort({students: 1}).exec();
            result = await School.find({ staff: {$in: ["b", "c"]} }).sort({students: -1}).exec();
            
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
