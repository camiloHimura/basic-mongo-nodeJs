module.exports = (res, code) =>{
    try{
        code();
    }catch(error){
        console.log("--catch: ",error);
        let info = "";
        if(error.name === 'MongoError' && error.code === 11000){
            info = "There was a duplicate key error";
        }
        res.status(404).send({messaje: info}).end()
    }
}