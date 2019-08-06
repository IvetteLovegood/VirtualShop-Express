"use strict";

const express = require("express");
const productCtrl = require("../controllers/product");
const orderCtrl = require("../controllers/order")
const api = express.Router();

const auth = require("../middleware/auth");

api.get("/product", productCtrl.getProducts);
api.get("/product/:productId", productCtrl.getProduct);
api.post("/product/", productCtrl.saveProduct);
api.put("/product/:productId", productCtrl.updateProducts);
api.delete("/product/:productId", productCtrl.deleteProduct);

api.get("/order", orderCtrl.getOrders);
api.get("/order/:orderId", orderCtrl.getOrder);
api.post("/order/", orderCtrl.createOrder);
api.put("/order/:orderId", orderCtrl.updateOrder);
api.delete("/order/:orderId", orderCtrl.deleteOrder)


api.get("/private", auth, function(req, res) {
  res.status(200).send({ message: "Tienes acceso" });
});

module.exports = api;
