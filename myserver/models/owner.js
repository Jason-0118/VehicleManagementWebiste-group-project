const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var OwnerSchema = new Schema({
  name: { type: String },
  address: { type: String },
  age: { type: Number },
  insuranceID: { type: Schema.Types.ObjectId, ref: "Insurance" },
  insuranceDetailID: { type: Schema.Types.ObjectId, ref: "InsuranceDetail" },
  carID: [{ type: Schema.Types.ObjectId, ref: "Car" }],
  phoneNumber: { type: String },
  gender: { type: String },
  dateOfBirth: { type: String},
});

//Export model
module.exports = mongoose.model("Owner", OwnerSchema);