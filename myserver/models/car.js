const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CarSchema = new Schema({
  make: {type: String},
  model: {type: String},
  year: {type: Number},
  mileage: {type: Number}
  //will have reference to owner
});

//Export model
module.exports = mongoose.model("Car", CarSchema);