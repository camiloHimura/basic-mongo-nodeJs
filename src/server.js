const connect = require("./connect");
const StudentCrud = require("./student/student.crud");

module.exports = {

    start: async () => {
        try{
            await connect.run();
            console.log("----- connected -----");
            /* console.log(await StudentCrud.getUserById("5cbe257275036372881f1ca4")) */
            /* console.log(await StudentCrud.createUser({firstName: "Teo"})) */
/*             console.log(await StudentCrud.updateUserById("5cbe257275036372881f1ca4", {firstName: "camiloHimura"})) */
        }
        catch(e){
            console.log("----- Error -----");
            console.log(e);
        }
    }

}
