let insurance = [
    {
        name: "Geico",
        payment: 150,
        // owner: (reference to owner)
        startingDate: "01/01/2021",
        endingDate: "07/01/2021",
        planIDNumber: 374502,  
    },
    {
        name: "Geico",
        payment: 150,
        // owner: (reference to owner)
        startingDate: "01/01/2021",
        endingDate: "07/01/2021",
        planIDNumber: 374502,  
    }
]

let owner = [
    {
        name: "Robin Purvis",
        address: "123 2nd St, Salem OR 97304",
        age: 22,
      //  titles: []
    },
    {
        name: "Robin Purvis",
        address: "123 2nd St, Salem OR 97304",
        age: 22,
    }
]

let car = [
    {
        make: "Tesla",
        model: "X",
        year: 2021,
        mileage: 0,
        // owner: (reference to owner)
    },
    {
        make: "Tesla",
        model: "X",
        year: 2021,
        mileage: 0,
        // owner: (reference to owner)
    }
]

const credentials = require("./dbCredentials.js");
const mongoose = require("mongoose");
mongoose.connect(credentials.connection_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Load our models
const Car = require("./models/car.js");
const Insurance = require("./models/insurance.js");
const Owner = require("./models/owner.js");

async function loadAllRecords() {
    //Delete all existing records
    await Car.deleteMany();
    await Insurance.deleteMany();
    await Owner.deleteMany();
  
    //Take the teams we have data for and use them to make records with out schema
    for (let insuranceObject of insurance) {
      //Make a Team from Schema
      const newInsurance = new Insurance(insuranceObject);
      console.log(newInsurance);
      //Save it to mongodb
      await newInsurance.save();
    }
  
    console.log("Done loading insurance");

    for (let carObject of car) {
        //Make a Team from Schema
        const newCar = new Car(carObject);
        //Save it to mongodb
        await newCar.save();
      }
    
    console.log("Done loading cars");

    for (let ownerObject of owner) {
        //Make a Team from Schema
        const newOwner = new Owner(ownerObject);
        //Save it to mongodb
        await newOwner.save();
      }
    
      console.log("Done loading owners");
  
    //Done with connection, close so program can exit
    mongoose.connection.close();
  }
  
  //Make it happen
  loadAllRecords();