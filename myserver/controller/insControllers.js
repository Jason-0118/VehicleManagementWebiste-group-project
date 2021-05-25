const Ins = require('../models/insurance');
const Owner = require('../models/owner');
const InsDetail = require('../models/insuranceDetail');

exports.list = async function (req, res) {
    let ins = await Ins.find().exec();
    res.render('insList.ejs', { ins });
}

exports.peopleList = async function (req, res) {
    let singleIns = await Ins.findById(req.params.id).exec();
    let members = await singleIns.members;
    let cars = await singleIns.cars;
    let coverage = await singleIns.coverage;
    res.render('singleIns.ejs', { ins: singleIns, members: members, cars: cars, coverage: coverage });
}