const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var InsuranceSchema = new Schema({
  name: {type: String},
  planIDNumber: {type: Number},
  payment: {type: Number},
  mileage: {type: String},
  startingDate: {type: String},
  endingDate: {type: String}
  //will have reference to owner and array of cars on insurance policy
});

//Export model
module.exports = mongoose.model("Insurance", InsuranceSchema);