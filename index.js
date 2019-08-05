"use strict";

const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

mongoose.connect(config.db, (err, res) => {
  if (err) {
    return console.log(`Database: Error de Conexión. ${err}`);
  }
  console.log("DataBase: Conexión Correcta");
  app.listen(config.port, () => {
    console.log(`API RESTFUL ok en: http://localhost:${config.port}`);
  });
});
