const getById = model => (id) => {
    return model.findById(id).exec()
}

const findOne = model => (options) => {
    return model.findOne(options)
}

const getAlls = model => () => {
    return model.find({}).exec()
}

const create = model => (Details) => {
    return model.create(Details)
}

const removeById = model => (id) => {
    return model.findByIdAndRemove(id).exec()
}

const updateById = model => (id, update) => {
    return model.findByIdAndUpdate(id, update, {new: true}).exec()
}

module.exports = model => ({
    findOne: findOne(model),
    create: create(model),
    getById: getById(model),
    getAlls: getAlls(model),
    removeById: removeById(model),
    updateById: updateById(model)
})