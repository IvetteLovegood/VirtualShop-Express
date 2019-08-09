"use strict";

const User = require("../models/user");
const service = require("../service");

function singUp(req, res) {
  const user = new User({
    nombre: req.body.nombre,
    email: req.body.email,
    password: req.body.password
  });

  user.save(err => {
    if (err)
      res.status(500).send({ message: `Error al crear el usuario ${err}` });
    return res.status(201).send({ token: service.createToken(user) });
  });
}

function singIn(req, res) {
  User.findOne(
    { email: req.body.email, password: req.body.password },
    (err, user) => {
      if (err) return res.status(500).send({ message: err });
      if (!user)
        return res
          .status(404)
          .send({ message: "El usuario o contraseña son incorrectos." });
      req.user = user;
      res.status(200).send({
        message: "Authenticación correcta",
        token: service.createToken(user)
      });
    }
  );
}

function getUser(req, res) {
  let userId = req.params.email;
  User.findById(userId, (err, user) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición ${err}` });
    if (!user) return res.status(404).send({ message: `El usuario no existe` });
    res.status(200).send({ user });
  });
}

function getUsers(req, res) {
  User.find({}, (err, user) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición ${err}` });
    if (!user)
      return res.status(404).send({ message: `No existe ningun usuario` });
    res.status(200).send({ user });
  });
}

function updateUser(req, res) {
  let userId = req.params.userId;
  let update = req.body;
  User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al guardar en la base de datos. ${err}` });
    res.status(200).send({ user: userUpdated });
  });
}

function deleteUser(req, res) {
  let userId = req.params.userId;
  User.findById(userId, (err, user) => {
    if (err)
      res.status(500).send({ message: `Error al eliminar el producto ${err}` });
    user.remove(err => {
      if (err)
        res
          .status(500)
          .send({ message: `Error al eliminar el usuario ${err}` });
      res.status(200).send({ message: "El usuario ha sido eliminado" });
    });
  });
}

module.exports = {
  singUp,
  singIn,
  getUser,
  getUsers,
  deleteUser,
  updateUser
};
