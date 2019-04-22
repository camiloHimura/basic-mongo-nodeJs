const connect = require("./connect");
const Student = require("./student/student.model");

module.exports = {

    start: async () => {
        try{
            await connect.run();
            var newStudent;
            console.log("----- connected -----");
            /* newStudent = await Student.create({firstName: "camilo"})*/
            console.log(await Student.find({ firstName: "Andres"}).exec() );
            console.log(await Student.find({ firstName: "camilo"}).exec() );
        }
        catch(e){
            console.log("----- Error -----");
            console.log(e);
        }
    }

}
