const Student = require("./student.model");

const getUserById = async (id) => {
    return Student.findById(id).exec()
}

const getAllUsers = async () => {
    return Student.find({}).exec()
}

const createUser = async (userDetails) => {
    return Student.create(userDetails)
}

const removeUserById = async (id) => {
    return Student.findByIdAndRemove(id).exec()
}

const updateUserById = async (id, update) => {
    return Student.findByIdAndUpdate(id, update, {new: true}).exec()
}

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  removeUserById,
  updateUserById
}