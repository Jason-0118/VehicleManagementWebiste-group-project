const Ins = require('../models/insurance');
const Owner = require('../models/owner');
const InsDetail = require('../models/insuranceDetail');

exports.list = async function (req, res) {
    let ins = await Ins.find().exec();
    var geicoArray = await Owner.find().where('insuranceID').equals(ins[1]._id).exec();
    var sfArray = await Owner.find().where('insuranceID').equals(ins[0]._id).exec();
    var proArray = await Owner.find().where('insuranceID').equals(ins[2]._id).exec();
    res.render('insList.ejs', { ins: ins, sfNum: sfArray.length, geicoNum: geicoArray.length, proNum: proArray.length });
}

exports.peopleList = async function (req, res) {
    let singleIns = await Ins.findById(req.params.id).exec();
    let members = await singleIns.members;
    let cars = await singleIns.cars;
    let coverage = await singleIns.coverage;
    res.render('singleIns.ejs', { ins: singleIns, members: members, cars: cars, coverage: coverage });
}

exports.insDetail = async function (req, res) {
    let singleInsDetail = await InsDetail.findById(req.params.id).exec();
    let owner = await Owner.find().where('insuranceDetailID').equals(req.params.id).exec();
    console.log(owner[0].fullname);
    res.render('insDetail.ejs', { detail: singleInsDetail, owner: owner[0].fullname });
}

exports.delete = async function (req, res, next) {
    try {
      await InsDetail.findByIdAndDelete(req.params.id).exec();
      res.redirect("/ins");
    } catch (err) {
      next(err);
    }
  };