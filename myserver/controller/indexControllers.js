const Insurance = require('../models/insurance');
const Owners = require('../models/owner');
const InsDetail = require('../models/insuranceDetail');
const Cars = require('../models/car');

exports.index = async function(req, res) {
    let cars = await Cars.find().exec();
    res.render('index.ejs', { cars });
}