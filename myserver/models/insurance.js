const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var InsuranceSchema = new Schema({
  name: {type: String},
  founder: {type: String},
  headquarter: {type: String},
  rank: {type: String},
  website: {type: String},
  formed: {type: Date},
  active: { type: Boolean, required: true, default: true }
  //will have reference to owner and array of cars on insurance policy
});

//Export model
module.exports = mongoose.model("Insurance", InsuranceSchema);