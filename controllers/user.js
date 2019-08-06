"use strict";

const User = require("../models/user");
const service = require("../service");

function singUp(req, res) {
  const user = new User({
    email: req.body.email,
    nombre: req.body.nombre
  });

  user.save(err => {
    if (err)
      res.status(500).send({ message: `Error al crear el usuario ${err}` });
    return res.status(200).send({ token: service.createToken(user) });
  });
}
function singIn(req, res) {
  User.find({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ message: err });
    if (!user)
      return res.status(404).send({ message: "El usuario no existe." });
    req.user = user;
    res.status(200).send({
      message: "Authenticación correcta",
      token: service.createToken(user)
    });
  });
}

module.exports = {
  singUp,
  singIn
};
