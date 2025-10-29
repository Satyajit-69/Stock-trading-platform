const { model } = require("mongoose");
const PositionSchema = require("../schema/PositionSchema");
const PositionModel = new model("position", PositionSchema);
module.exports = PositionModel;
