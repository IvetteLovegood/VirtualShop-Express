"use strict";

const express = require("express");
const productCtrl = require("../controllers/product");
const orderCtrl = require("../controllers/order");
const userCtrl = require("../controllers/user");

const api = express.Router();

const auth = require("../middleware/auth");

api.get("/product", auth, productCtrl.getProducts);
api.get("/product/:productId", auth, productCtrl.getProduct);
api.post("/product/", auth, productCtrl.saveProduct);
api.put("/product/:productId", auth, productCtrl.updateProducts);
api.delete("/product/:productId", productCtrl.deleteProduct);

api.get("/order", auth, orderCtrl.getOrders);
api.get("/order/:orderId", auth, orderCtrl.getOrder);
api.post("/order/", auth, orderCtrl.createOrder);
api.put("/order/:orderId", auth, orderCtrl.updateOrder);
api.delete("/order/:orderId", orderCtrl.deleteOrder);

api.get("/user", auth, userCtrl.getUsers);
api.get("/user/:userId", auth, userCtrl.getUser);
api.put("/user/:userId", auth, userCtrl.updateUser);
api.delete("/user/:userId", auth, userCtrl.deleteUser);

api.post("/signup", userCtrl.singUp);
api.post("/signin", userCtrl.singIn);

module.exports = api;
