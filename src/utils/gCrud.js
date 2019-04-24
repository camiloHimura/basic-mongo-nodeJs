const errorHandle = require("../utils/errorHandler");

const getById = (model, {format}) => async (req, res) => {
    try{
        return model.findById(id).exec()
    }catch(error){
        errorHandle(error, res);
    }
}

const find = (model, {format}) => async (req, res) => {
    try{
        return model.find(options)
    }catch(error){
        errorHandle(error, res);
    }
}

const findOne = (model, {format}) => async (req, res) => {
    try{
        return model.findOne(options)
    }catch(error){
        errorHandle(error, res);
    }
}

const getAlls = (model, {arrayFormat}) => async (req, res) => {
    try{
        let info = await model.find({}).exec()
        res.status(200).send(arrayFormat(info))
    }catch(error){
        errorHandle(error, res);
    }
}

const create = (model, {format}) => async (req, res) => {
    try{
        let data = await model.create({ ...req.body });
        if(!data){ return res.status(400).end() }

        res.status(201).send({status: "saved", data: format(data)});

    }catch(error){
        errorHandle(error, res);
    }
}

const findAndremove = (model, {format}) => async (req, res) => {
    try{
        return model.findOneAndRemove(options).exec()
    }catch(error){
        errorHandle(error, res);
    }
}

const findAndUpdate = (model, {format}) => async (req, res) => {
    try{
        return model.findOneAndUpdate(options, update, {new: true}).exec()
    }catch(error){
        errorHandle(error, res);
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