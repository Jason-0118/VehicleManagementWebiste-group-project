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
        let newCar = new Cars({});
        res.render('ownerForm.ejs', {
            title: 'Registration',
            owner: newOwner,
            insList: insList,
            insDetail: newInsDetail,
            cars: cars,
            newCar: newCar
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
        let newCar = new Cars({});
        res.render('ownerForm.ejs', {
            title: `Update ${owner.fullname}`,
            owner: owner,
            insList: insList,
            insDetail: insDetail[0],
            cars: cars,
            newCar: newCar
        });
    } catch (err) {
        next(err);
    }
};

exports.update_post = async function (req, res, next) {
    try {
        // let insList = await Insurance.find().select('name').exec();
        let ins = await Insurance.findById(req.body.insuranceID).exec();
        let owner = await Owners.findById(req.body.owner_id).exec();
        if (owner === null)
            owner = new Owners({ _id: req.body.owner_id });

        let cars = await Cars.find().where('ownerID').equals(req.body.owner_id).exec();
        if (cars.length === 0)
            car = [];

        let insDetail = await InsDetail.findById(req.body.insDetail_id).exec();
        if (insDetail === null)
            insDetail = new InsDetail({ _id: req.body.insDetail_id });

        let newCar = await Cars.findById(req.body.newCar_id).exec();
        if (req.body.active === "true" && newCar === null)
            newCar = new Cars({ _id: req.body.newCar_id });

        owner.first_name = req.body.first_name;
        owner.last_name = req.body.last_name;
        owner.gender = req.body.gender;
        owner.age = req.body.age;
        owner.address = req.body.address;
        owner.state = req.body.state;
        owner.zipcode = req.body.zipcode;
        owner.phone = req.body.phone;
        owner.insuranceDetailID = insDetail._id;
        owner.insuranceID = req.body.insuranceID;


        insDetail.ins_name = ins.name;
        insDetail.ins_payment = req.body.ins_payment;
        insDetail.ins_s_date = req.body.ins_s_date;
        insDetail.ins_e_date = req.body.ins_e_date;
        insDetail.ins_policy = req.body.ins_policy;
        insDetail.ins_BIL = req.body.ins_BIL;
        insDetail.ins_PDL = req.body.ins_PDL;
        insDetail.ins_PIP = req.body.ins_PIP;
        insDetail.ins_UMBI = req.body.ins_UMBI;
        insDetail.ins_UMPD = req.body.ins_UMPD;
        insDetail.ins_collision = req.body.ins_collision;
        insDetail.ins_com = req.body.ins_com;
        insDetail.ownerID = owner._id;
        insDetail.insuranceID = req.body.insuranceID;

        if (cars.length > 0) {
            // for (let c = 0; c < cars.length; ++c) {
            //     cars[c].vin = req.body.vin + `${c}`;
            //     cars[c].make = req.body.make + `${c}`;
            //     cars[c].model = req.body.model + `${c}`;
            //     cars[c].year = req.body.year + `${c}`;
            //     cars[c].mileage = req.body.mileage + `${c}`;
            //     cars[c].ownerID = owner._id;
            //     cars[c].insuranceID = req.body.insuranceID;
            //     await cars[c].save();
            // }
            cars[0].vin = req.body.vin0;
            cars[0].make = req.body.make0;
            cars[0].model = req.body.model0;
            cars[0].year = req.body.year0;
            cars[0].mileage = req.body.mileage0;
            cars[0].ownerID = owner._id;
            cars[0].insuranceID = req.body.insuranceID;
            await cars[0].save();
            cars[1].vin = req.body.vin1;
            cars[1].make = req.body.make1;
            cars[1].model = req.body.model1;
            cars[1].year = req.body.year1;
            cars[1].mileage = req.body.mileage1;
            cars[1].ownerID = owner._id;
            cars[1].insuranceID = req.body.insuranceID;
            await cars[1].save();
            if (cars[2] !== undefined) {
                cars[2].vin = req.body.vin2;
                cars[2].make = req.body.make2;
                cars[2].model = req.body.model2;
                cars[2].year = req.body.year2;
                cars[2].mileage = req.body.mileage2;
                cars[2].ownerID = owner._id;
                cars[2].insuranceID = req.body.insuranceID;
                await cars[2].save();
            }
            if (cars[3] !== undefined) {
                cars[3].vin = req.body.vin3;
                cars[3].make = req.body.make3;
                cars[3].model = req.body.model3;
                cars[3].year = req.body.year3;
                cars[3].mileage = req.body.mileage3;
                cars[3].ownerID = owner._id;
                cars[3].insuranceID = req.body.insuranceID;
                await cars[3].save();
            }

        }



        if (req.body.active === "true") {
            newCar.vin = req.body.newVin;
            newCar.make = req.body.newMake;
            newCar.model = req.body.newModel;
            newCar.year = req.body.newYear;
            newCar.mileage = req.body.newMileage;
            newCar.ownerID = owner._id;
            newCar.insuranceID = req.body.insuranceID;
            owner.carID.push(newCar._id);
            await newCar.save();

        }
        await owner.save();
        await insDetail.save();
        res.render('ownersingle.ejs', { owner: owner, cars: cars });


    } catch (err) {
        next(err);
    }
}

