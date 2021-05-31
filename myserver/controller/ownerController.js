const Insurance = require('../models/insurance');
const Owners = require('../models/owner');
const InsDetail = require('../models/insuranceDetail');
const Cars = require('../models/car');

exports.ownermain = async function (req, res) {
    let owners = await Owners.find().exec();
    res.render('ownermain.ejs', { owners });
}

exports.ownersingle = async function (req, res) {
    let owner = await Owners.findById(req.params.id).exec();
    let cars = await Cars.find().where('ownerID').equals(req.params.id).exec();
    res.render('ownersingle.ejs', { owner: owner, cars: cars });
}

exports.create = async function (req, res) {
    try {
        let insList = await Insurance.find().select('name').exec();
        let newOwner = new Owners({});
        let newInsDetail = new InsDetail({});
        let cars = [];
        res.render('ownerForm.ejs', {
            title: 'Registration',
            owner: newOwner,
            insList: insList,
            insDetail: newInsDetail,
            cars: cars
        });
    } catch (err) {
        next(err);
    }
};

exports.update_get = async function (req, res, next) {
    try {
        let insList = await Insurance.find().select('name').exec();
        let owner = await Owners.findById(req.params.id).exec();
        let cars = await Cars.find().where('ownerID').equals(req.params.id).exec();
        let insDetail = await InsDetail.find().where('ownerID').equals(req.params.id).exec();
        res.render('ownerForm.ejs', {
            title: `Update ${owner.fullname}`,
            owner: owner,
            insList: insList,
            insDetail: insDetail[0],
            cars: cars,
        });
    } catch (err) {
        next(err);
    }
};

exports.update_post = async function (req, res, next) {
    try {


    } catch (err) {
        next(err);
    }
}

