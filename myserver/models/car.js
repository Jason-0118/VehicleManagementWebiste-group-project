const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CarSchema = new Schema({
  make: {type: String},
  model: {type: String},
  year: {type: Number},
  mileage: {type: Number},
  ownerID: { type: Schema.Types.ObjectId, ref: "Owner" },
  insuranceDetailID: { type: Schema.Types.ObjectId, ref: "InsuranceDetail" },
  //will have reference to owner
});

//Export model
module.exports = mongoose.model("Car", CarSchema);