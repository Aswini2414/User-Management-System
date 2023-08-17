const mongoose = require("mongoose");
const express = require("express");
const autoIncrement = require("mongoose-auto-increment");

const sequenceSchema = new mongoose.Schema({
  _id: {
    type: String,
    unique: false,
  },
  seq: {
    type: Number,
    default:0
  }
  
})

const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    unique: true, // Ensures the userId is unique
    required: true,
  },
  firstname: {
    type: String,
    unique: false,
    required: true,
  },
  lastname: {
    type: String,
    unique: false,
    required: true,
  },
  email: {
    type: String,
    unique: false,
    required: true,
  },
  mobile: {
    type: String,
    unique: false,
    required: true,
  },
});

// Create models
const User = mongoose.model("User", userSchema);
const Sequence = mongoose.model("Sequence", sequenceSchema);

// Function to get the next sequence value
async function getNextSequenceValue(sequenceName) {
  const sequenceDoc = await Sequence.findByIdAndUpdate(
    sequenceName,
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );
  return sequenceDoc.seq;
}

module.exports = {
  User,getNextSequenceValue
};


