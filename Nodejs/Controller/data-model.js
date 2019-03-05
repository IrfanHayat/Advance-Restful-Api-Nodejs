const jwt = require("jsonwebtoken");
const userModel = require("../Model/data-model");
const mongoose = require("mongoose")
exports.getAllUser = async (req, res) => {
    var user = await userModel.find({})
    const token = jwt.sign({ user }, 'secret', { expiresIn: '1h' })

    console.log(token)
    res.status(201).json({
        user,
        token
    })
}

exports.postUserData = async (req, res) => {
    const user = new userModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        company: req.body.company

    })
    const new_user = await user.save();
    res.status(201).json({ new_user })
}

exports.updateUserData = async (req, res) => {
    const id = req.params.id;
    const updateUser = await userModel.update({ _id: id }, { $set: { name: req.body.name, company: req.body.company } })
    res.status(201).json({
        updateUser
    })

}

exports.deleteUserData = async (req, res) => {
    const id = req.params.id;
    const deleteUser = await userModel.remove({ _id: id })
    res.status(201).json({
        deleteUser,
        message: "Data delete Successfull"
    })
}

