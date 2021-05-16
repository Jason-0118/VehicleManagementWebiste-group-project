const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var OwnerSchema = new Schema({
  name: {type: String},
  address: {type: String},
  age: {type: Number}
  //will have reference to array of cars owned
});

//Export model
module.exports = mongoose.model("Owner", OwnerSchema);