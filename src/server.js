const connect = require("./connect");
const Student = require("./student/student.model");
const School = require("./school/school.model");

module.exports = {

    start: async () => {
        try{
            await connect.run();
            console.log("----- connected -----");
            let result, school;
            
            /*
                -relationship
                ---result = await School.findOne({name: "Maria Cano"}).exec()
                ---result = await Student.create({firstName: "teo", school: result._id});
                
                -search    
                ---result = await Student.findOne({firstName: "teo"}).populate("school").exec();
                
                result = await School.create({name: "Maria Cano"})
                result = await Student.getById("5cbe257275036372881f1ca4")
                result = await Student.updateById("5cbe257275036372881f1ca4", {firstName: "camiloHimura"}))
            */
            console.log(result)
        }
        catch(e){
            console.log("----- Error -----");
            console.log(e);
        }
    }

}
