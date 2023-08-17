const express = require("express");
const { User,getNextSequenceValue } = require("../schema/user-schema.js");

const addUser = async(req, res) => {
    const user = req.body;
    console.log(user);
    const userId = await getNextSequenceValue('userId');
    const newUser = new User({ "userId":userId,...user });

    try {
        console.log("done");
        await newUser.save();
        res.status(201).json({
            data: newUser
        });
    } catch (error) {
        res.status(404).json({
            message: error
        });
    }

}

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    
}

const getUser = async (req,res) => {
    try {
        const user = await User.find({ _id: req.params.id });
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const editUser = async (req, res) => {
    const user = req.body;
    const editUser = new User(user);
    try {
        await User.updateOne({ _id: req.params.id }, editUser);
        res.status(201).json(editUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
      await User.deleteOne({ _id: req.params.id });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
}

module.exports = {
    addUser,getUsers,getUser,editUser,deleteUser
};