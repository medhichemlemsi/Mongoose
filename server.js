//  setting up Mongoose:
// require('dotenv').config();

const connectDB = require("./routes/connectdb");

const createPerson = require("./routes/createPerson");
const createMany = require("./routes/createMany");
const findByName = require("./routes/searchByName");
const findByCertainFood = require("./routes/searchByFood");
const findById = require("./routes/searchById");
const updatePerson = require("./routes/updatePersonById");

const deletePerson = require("./routes/deleteOne");
const removeManyPeople = require("./routes/deleteMany");
const findPersonBurritos = require("./routes/querySearch");
// const updateByAge = require ("./routes/updatePersonByAge");


connectDB();

createPerson();

createMany();

findByName("Ahmed");

findByCertainFood("Tacos");

findById("61b2357299c4c7fb1ed629bb");

updatePerson("61b2357299c4c7fb1ed629ba");

// updateByAge("Nabil");

deletePerson("61b2357299c4c7fb1ed629bc");

removeManyPeople();

findPersonBurritos();