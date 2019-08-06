"use strict";

const Order = require("../models/order");

function getOrder(req, res) {
    let orderId = req.params.orderId;
    Order.findById(orderId, (err, order) => {
        if (err)
            return res
                .status(500)
                .send({ message: `Error al realizar la petición ${err}` });
        if (!order)
            return res.status(404).send({ message: `El pedido no existe` });
        res.status(200).send({ order });
    });
}

function getOrders(req, res) {
    Order.find({}, (err, order) => {
        if (err)
            return res
                .status(500)
                .send({ message: `Error al realizar la petición ${err}` });
        if (!order)
            return res.status(404).send({ message: `No existe ningun pedido` });
        res.status(200).send({ order });
    });
}


function createOrder(req, res) {
    let order = new Order();

    order.direccion = req.body.direccion;
    order.lat_long = req.body.lat_long;
    order.id_usuario = req.body.id_usuario;
    order.id_articulo = req.body.id_articulo;

    order.save((err, orderStored) => {
        if (err)
            res
                .status(500)
                .send({ message: `Error al guardar en la base de datos. ${err}` });
        res.status(200).send({ order: orderStored });
    });

}

function updateOrder(req, res) {
    let orderId = req.params.orderId;
    let update = req.body;
    Order.findByIdAndUpdate(orderId, update, (err, orderUpdated) => {
        if (err)
            res
                .status(500)
                .send({ message: `Error al guardar en la base de datos. ${err}` });
        res.status(200).send({ order: orderUpdated });
    });
}

function deleteOrder(req, res) {
    let orderId = req.params.orderId;
    Order.findById(orderId, (err, order) => {
        if (err)
            res.status(500).send({ message: `Error al eliminar el pedido ${err}` });
        order.remove(err => {
            if (err)
                res
                    .status(500)
                    .send({ message: `Error al eliminar el pedido ${err}` });
            res.status(200).send({ message: "El pedido ha sido eliminado" });
        });
    });
}

module.exports = {
    getOrder,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
}