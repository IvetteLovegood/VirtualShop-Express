"use strict";

const Product = require("../models/product");

function getProduct(req, res) {
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
}

function getProducts(req, res) {
  Product.find({}, (err, products) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición ${err}` });
    if (!products)
      return res.status(404).send({ message: `No existen productos` });
    res.status(200).send({ products });
  });
}

function saveProduct(req, res) {
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
    res.status(200).send({ 
      message: "El producto se agrego correctamente",
      product: productStored 
    });
  });
}
function updateProducts(req, res) {
  let productId = req.params.productId;
  let update = req.body;
  Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al guardar en la base de datos. ${err}` });
    res.status(200).send({ 
      message: "El producto se actualizo correctamente",
      product: productUpdated });
  });
}
function deleteProduct(req, res) {
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
}

module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProducts,
  deleteProduct
};
