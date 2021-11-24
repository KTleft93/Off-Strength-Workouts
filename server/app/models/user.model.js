const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    name: String,
    age: Number,
    weight: Number,
    height: Number,
    goal: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
  resetLink: {
    data: String,
    default: ''
  }

 
   })
);

module.exports = User;
