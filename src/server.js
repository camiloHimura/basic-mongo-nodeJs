const connect = require("./connect");
const Student = require("./student/student.model");

module.exports = {

    start: async () => {
        try{
            await connect.run();
            console.log("----- connected -----");
            let newStudent = await Student.create({firstName: "camilo"}) 
            console.log(newStudent);
        }
        catch(e){
            console.log("----- Error -----");
        }
    }

}
