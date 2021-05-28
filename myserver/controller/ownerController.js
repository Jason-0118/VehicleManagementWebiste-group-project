const Insurance = require('../models/insurance');
const Owners = require('../models/owner');
const InsDetail = require('../models/insuranceDetail');
const Cars = require('../models/car');

exports.ownermain = async function (req, res) {
    let owners = await Owners.find().exec();
    res.render('ownermain.ejs', { owners });
}

exports.ownersingle = async function (req, res){
    let owner = await Owners.findById(req.params.id).exec();
    let cars = await Cars.find().where('ownerID').equals(req.params.id).exec();
    res.render('ownersingle.ejs', { owner : owner, cars : cars });
}

