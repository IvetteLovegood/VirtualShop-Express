"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = Schema({
  direccion: String,
  lat_long: String,
  id_usuario: String,
  id_articulo: String
});

module.exports = mongoose.model("Order", OrderSchema);
