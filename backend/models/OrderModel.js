
const {model} = require("mongoose");
const { OrderSchema } = require("../schema/OrderSchema");
const OrderModel = new model("order",OrderSchema) ;
module.exports = OrderModel ;



