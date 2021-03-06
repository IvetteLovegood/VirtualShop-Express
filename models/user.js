"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  nombre:{ type: String, unique: true, lowercase: false },
  password: { type: String, select: false }
});

module.exports = mongoose.model("User", UserSchema);
