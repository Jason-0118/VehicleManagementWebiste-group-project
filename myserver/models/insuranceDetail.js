const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var InsuranceDetailSchema = new Schema({
    name: { type: String },
    payment: { type: String },
    startingDate: { type: String },
    endingDate: { type: String },
    policyNum: { type: Number },
    BIL: { type: String },
    PDL: { type: String },
    PIP: { type: String },
    UMBI: { type: String },
    UMPD: { type: String },
    collision: { type: String },
    comprehensive: { type: String },
    ownerID: { type: Schema.Types.ObjectId, ref: "Owner" },
    carID: { type: Schema.Types.ObjectId, ref: "Car" },
});

//Export model
module.exports = mongoose.model("InsuranceDetail", InsuranceDetailSchema);