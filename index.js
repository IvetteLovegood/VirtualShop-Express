"use strict";

const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3001;

const Product = require("./models/product");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true, limit: "50mb" }));

// === GET ALL PRODUCTS ==
app.get("/api/product", (req, res) => {
  Product.find({}, (err, products) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición ${err}` });
    if (!products)
      return res.status(404).send({ message: `No existen productos` });
    res.status(200).send({ products });
  });
});

// === GET PRODUCT BY ID ==
app.get("/api/product/:productId", (req, res) => {
  let productId = req.params.productId;
  Product.findById(productId, (err, product) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición ${err}` });
    if (!product)
      return res.status(404).send({ message: `El producto no existe` });
    res.status(200).send({ product });
  });
});

// === POST NEW PRODUCT ==
app.post("/api/product/", (req, res) => {
  console.log("POST /api/product");
  console.log(req.body);

  let product = new Product();

  product.nombre = req.body.nombre;
  product.imagen = req.body.imagen;
  product.precio = req.body.precio;
  product.descripcion = req.body.descripcion;

  product.save((err, productStored) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al guardar en la base de datos. ${err}` });
    res.status(200).send({ product: productStored });
  });
});

// === UPDATE PRODUCT BY ID ==
app.put("/api/product/:productId", (req, res) => {
  let productId = req.params.productId;
  let update = req.body;
  Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al guardar en la base de datos. ${err}` });
    res.status(200).send({ product: productUpdated });
  });
});

// === DELETE PRODUCT BY ID ==
app.delete("/api/product/:productId", (req, res) => {
  let productId = req.params.productId;
  Product.findById(productId, (err, product) => {
    if (err)
      res.status(500).send({ message: `Error al eliminar el producto ${err}` });
    product.remove(err => {
      if (err)
        res
          .status(500)
          .send({ message: `Error al eliminar el producto ${err}` });
      res.status(200).send({ message: "El producto ha sido eliminado" });
    });
  });
});

mongoose.connect("mongodb://localhost:27017/shop", (err, res) => {
  if (err) {
    return console.log(`Database: Error de Conexión. ${err}`);
  }
  console.log("DataBase: Conexión Correcta");
  app.listen(port, () => {
    console.log(`API RESTFUL ok en: http://localhost:${port}`);
  });
});
