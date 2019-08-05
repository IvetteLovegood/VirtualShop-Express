"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = Schema({
  nombre: String,
  imagen: String,
  precio: { type: Number, default: 0 },
  descripcion: String
});

module.exports = mongoose.model("Product", ProductSchema);
