const getById = (model, {format}) => async (req, res) => {
    try{

        return model.findById(id).exec()
    }catch(error){
        console.log("--catch: ",error);
        let info = "";
        if(error.name === 'MongoError' && error.code === 11000){
            info = "There was a duplicate key error";
        }
        res.status(404).send({messaje: info}).end()
    }
}

const find = (model, {format}) => async (req, res) => {
    try{

        return model.find(options)
    }catch(error){
        console.log("--catch: ",error);
        let info = "";
        if(error.name === 'MongoError' && error.code === 11000){
            info = "There was a duplicate key error";
        }
        res.status(404).send({messaje: info}).end()
    }
}

const findOne = (model, {format}) => async (req, res) => {
    try{

        return model.findOne(options)
    }catch(error){
        console.log("--catch: ",error);
        let info = "";
        if(error.name === 'MongoError' && error.code === 11000){
            info = "There was a duplicate key error";
        }
        res.status(404).send({messaje: info}).end()
    }
}

const getAlls = (model, {arrayFormat}) => async (req, res) => {
    try{
        let info = await model.find({}).exec()
        res.status(200).send(arrayFormat(info))
    }catch(error){
        console.log("--catch: ",error);
        let info = "";
        if(error.name === 'MongoError' && error.code === 11000){
            info = "There was a duplicate key error";
        }
        res.status(404).send({messaje: info}).end()
    }
}

const create = (model, {format}) => async (req, res) => {
    try{
        let data = await model.create({ ...req.body });
        if(!data){ return res.status(400).end() }

        res.status(201).send({status: "saved", data: format(data)});

    }catch(error){
        console.log("--catch: ",error);
        let info = "";
        if(error.name === 'MongoError' && error.code === 11000){
            info = "There was a duplicate key error";
        }
        res.status(404).send({messaje: info}).end()
    }
}

const findAndremove = (model, {format}) => async (req, res) => {
    try{

        return model.findOneAndRemove(options).exec()
    }catch(error){
        console.log("--catch: ",error);
        let info = "";
        if(error.name === 'MongoError' && error.code === 11000){
            info = "There was a duplicate key error";
        }
        res.status(404).send({messaje: info}).end()
    }
}

const findAndUpdate = (model, {format}) => async (req, res) => {
    try{

        return model.findOneAndUpdate(options, update, {new: true}).exec()
    }catch(error){
        console.log("--catch: ",error);
        let info = "";
        if(error.name === 'MongoError' && error.code === 11000){
            info = "There was a duplicate key error";
        }
        res.status(404).send({messaje: info}).end()
    }
}

const defaultFormat = data => data;

module.exports = (model, options) => {
    options = Object.assign({format: defaultFormat, arrayFormat: defaultFormat}, options)

    return {
        find: find(model, options),
        create: create(model, options),
        findOne: findOne(model, options),
        getById: getById(model, options),
        getAlls: getAlls(model, options),
        findAndremove: findAndremove(model, options),
        findAndUpdate: findAndUpdate(model, options)
    }
}