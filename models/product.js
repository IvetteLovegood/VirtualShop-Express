"use strict";

const mongoose = require("mongoose");
const autoIncrement = require("mongodb-autoincrement");
const Schema = mongoose.Schema;

// var ObjectId = mongoose.Schema.Types.ObjectId;

const ProductSchema = Schema({
  // idProduct: ObjectId,
  nombre: String,
  imagen: String,
  precio: { type: Number, default: 0 },
  descripcion: String
});
// ProductSchema.plugin(autoIncrement.mongoosePlugin, { model:'Product', field: 'idProduct'})
module.exports = mongoose.model("Product", ProductSchema);
