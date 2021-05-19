// let insurance = [
//     {
//         name: "Geico",
//         payment: 150,
//         // owner: (reference to owner)
//         startingDate: "01/01/2021",
//         endingDate: "07/01/2021",
//         planIDNumber: 374502,  
//     },
//     {
//         name: "Geico",
//         payment: 150,
//         // owner: (reference to owner)
//         startingDate: "01/01/2021",
//         endingDate: "07/01/2021",
//         planIDNumber: 374502,  
//     }
// ]

// let owner = [
//     {
//         name: "Robin Purvis",
//         address: "123 2nd St, Salem OR 97304",
//         age: 22,
//       //  titles: []
//     },
//     {
//         name: "Robin Purvis",
//         address: "123 2nd St, Salem OR 97304",
//         age: 22,
//     }
// ]

// let car = [
//     {
//         make: "Tesla",
//         model: "X",
//         year: 2021,
//         mileage: 0,
//         // owner: (reference to owner)
//     },
//     {
//         make: "Tesla",
//         model: "X",
//         year: 2021,
//         mileage: 0,
//         // owner: (reference to owner)
//     }
// ]

var personInfo = [
  {
    //owner info start
    owner: {
      name: "Xin Zhang",
      address: "123 XinZhang St, Salem OR 97305",
      age: 26,
      phoneNumber: "123-456-7890",
      dateOfBirth: "01/01/2000",
      gender: "male",
    },
    //car info
    cars: [{
      make: "Honda",
      mode: "Civic EX-T",
      year: 2019,
      mileage: 8000
    },
    {
      make: "Honda",
      mode: "Civic EX-T",
      year: 2019,
      mileage: 8000
    },
    {
      make: "Honda",
      mode: "Civic EX-T",
      year: 2019,
      mileage: 8000
    }],
    //insurance info
    insurance: {
      name: "Geico",
      payment: "$100",
      startingDate: "01/01/2021",
      endingDate: "07/01/2021",
      policyNum: 4610535224,
      //for other
      BIL: "$50,000/$100,000", //bodily injury liability
      PDL: "$25,000", //property damage liability
      //for self
      PIP: "Non Deductible", //personal injury protection
      UMBI: "$25,000/$50,000", //uninsured motorist bodily injury
      //for car
      UMPD: "$20,000", //uninsured motorist property damage
      collision: "$500",
      comprehensive: "$500 Ded",
    }
  },
  {
    //owner info start
    owner: {
      name: "Randy",
      address: "123 Randy St, Salem OR 97305",
      age: 18,
      phoneNumber: "123-456-7890",
      dateOfBirth: "01/01/2000",
      gender: "male",
    },
    //car info
    cars: [{
      make: "Tesla",
      mode: "X",
      year: 2020,
      mileage: 1000
    },
    {
      make: "Tesla",
      mode: "X",
      year: 2020,
      mileage: 1000
    },
    {
      make: "Tesla",
      mode: "X",
      year: 2020,
      mileage: 1000
    }],
    //insurance info
    insurance: {
      name: "State Farm",
      payment: "$150",
      startingDate: "01/01/2021",
      endingDate: "07/01/2021",
      policyNum: 9687535224,
      //for other
      BIL: "$50,000/$100,000", //bodily injury liability
      PDL: "$25,000", //property damage liability
      //for self
      PIP: "Non Deductible", //personal injury protection
      UMBI: "$25,000/$50,000", //uninsured motorist bodily injury
      //for car
      UMPD: "$20,000", //uninsured motorist property damage
      collision: "$500",
      comprehensive: "$500 Ded",
    }
  },
  {
    //owner info start
    owner: {
      name: "Robin",
      address: "123 Robin St, Salem OR 97305",
      age: 18,
      phoneNumber: "123-456-7890",
      dateOfBirth: "01/01/2000",
      gender: "female",
    },
    //car info
    cars: [{
      make: "Tesla",
      mode: "X",
      year: 2020,
      mileage: 1000
    },
    {
      make: "Tesla",
      mode: "X",
      year: 2020,
      mileage: 1000
    },
    {
      make: "Tesla",
      mode: "X",
      year: 2020,
      mileage: 1000
    }],
    //insurance info
    insurance: {
      name: "Progressive",
      payment: "$120",
      startingDate: "01/01/2021",
      endingDate: "07/01/2021",
      policyNum: 7610554224,
      //for other
      BIL: "$50,000/$100,000", //bodily injury liability
      PDL: "$25,000", //property damage liability
      //for self
      PIP: "Non Deductible", //personal injury protection
      UMBI: "$25,000/$50,000", //uninsured motorist bodily injury
      //for car
      UMPD: "$20,000", //uninsured motorist property damage
      collision: "$500",
      comprehensive: "$500 Ded",
    }
  },
]

var insuranceList = [
  {
    name: "State Farm",
    founder: "George J. Mecherle",
    headquarter: "Bloomington, Illinois, United States",
    rank: "#1",
    website: "www.statefarm.com",
    formed: Date.parse("1936"),
    active: true
  },
  {
    name: "Geico",
    founder: "Berkshire Hathaway",
    headquarter: "Chevy Chase, Maryland, United States",
    rank: "#2",
    website: "www.geico.com",
    formed: Date.parse("1922"),
    active: true
  },
  {
    name: "Progressive",
    founder: "Joseph Lewis & Jack Green",
    headquarter: "Mayfield Village, Ohio, United States",
    rank: "#3",
    website: "www.progressive.com",
    formed: Date.parse("1937"),
    active: true
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
const InsuranceDetail = require("./models/insuranceDetail");
const Owner = require("./models/owner.js");

async function loadAllRecords() {
  //Delete all existing records
  await InsuranceDetail.deleteMany();
  await Car.deleteMany();
  await Insurance.deleteMany();
  await Owner.deleteMany();

  insuranceRecords = [];
  carRecords = [];
  ownerReords = [];
  insuranceDetail = [];

  //Insurance list
  for (let insuranceObject of insuranceList) {
    const newInsurance = new Insurance(insuranceObject);
    insuranceRecords.push(newInsurance);
    console.log(newInsurance);
    await newInsurance.save();
  }
  console.log("Done loading Insurance list");

  //owner & insuranceDetail & car
  for (let item of personInfo) {
    const newOwner = new Owner(item.owner);
    const newInsuranceDetail = new InsuranceDetail(item.insurance);

    //refer each other
    newOwner.insuranceDetailID = newInsuranceDetail;
    newInsuranceDetail.ownerID = newOwner;

    //read in car info for owner and insurance
    for(let i = 0; i < item.cars.length; i++){
      let newCar = new Car(item.cars[i]);
      newOwner.carID[i] = newCar;
      newInsuranceDetail.carID[i] = newCar;
      newCar.insuranceDetailID = newInsuranceDetail;
      newCar.ownerID = newOwner;

      //store in DB
      await newCar.save();
    }

    if (item.insurance.name === "State Farm") {
      newOwner.insuranceID = insuranceRecords[0];
    }
    else if (item.insurance.name === "Geico") {
      newOwner.insuranceID = insuranceRecords[1];
    }
    else if (item.insurance.name === "Progressive") {
      newOwner.insuranceID = insuranceRecords[2];
    }

    //store in DB
    await newOwner.save();
    await newInsuranceDetail.save();
    // await newCar.save();
  }
  console.log("load car insuranceDetail and owner");


  mongoose.connection.close();
}


// async function loadAllRecords() {
//     //Delete all existing records
//     await Car.deleteMany();
//     await Insurance.deleteMany();
//     await Owner.deleteMany();

//     //Take the teams we have data for and use them to make records with out schema
//     for (let insuranceObject of insurance) {
//       //Make a Team from Schema
//       const newInsurance = new Insurance(insuranceObject);
//       console.log(newInsurance);
//       //Save it to mongodb
//       await newInsurance.save();
//     }

//     console.log("Done loading insurance");

//     for (let carObject of car) {
//         //Make a Team from Schema
//         const newCar = new Car(carObject);
//         //Save it to mongodb
//         await newCar.save();
//       }

//     console.log("Done loading cars");

//     for (let ownerObject of owner) {
//         //Make a Team from Schema
//         const newOwner = new Owner(ownerObject);
//         //Save it to mongodb
//         await newOwner.save();
//       }

//       console.log("Done loading owners");

//     //Done with connection, close so program can exit
//     mongoose.connection.close();
//   }

//Make it happen
loadAllRecords();