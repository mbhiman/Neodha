const { model } = require('mongoose');

const { OrdersSchema } = require('../schemas/OrdersSchema');

const OrdersModel = new model("watchlist", OrdersSchema);

module.exports = { OrdersModel };