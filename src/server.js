const connect = require("./connect");
const Student = require("./student/student.model");
const School = require("./school/school.model");

module.exports = {

    start: async () => {
        try{
            await connect.run();
            console.log("----- connected -----");
            let result, school;
            
            result = await School.create({name: "Cefa", students: 250, staff:["a", "b", "c", "d"]})
            
            /*
            -search    
            result = await School.find({ staff: {$in: ["b", "c"]} }).sort({students: 1}).exec();
            result = await Student.findOne({firstName: "teo"}).populate("school").exec();
            
            -Insert
            result = await School.create([{name: "José Maria", students: 100, isMilitar: true, staff: ["a", "b", "c"]}, 
            {name: "Pedro Nel", students: 200, isMilitar: true, staff: ["a", "b", "c", "d"]}, 
            {name: "Escolme", students: 400, staff: ["a", "b", "c", "d"]},
            {name: "Ferrini", students: 400, staff: ["a", "b", "c", "d", "f"]}])
            
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
           console.log(result.staffCount)
        }
        catch(e){
            console.log("----- Error -----");
            console.log(e);
        }
    }

}
