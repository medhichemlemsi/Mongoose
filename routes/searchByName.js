// Use model.find() to Search Your Database.
const Person = require("../models/person")
async function findPeopleByName(Nameperson) {
    const findByName = await Person.find({ name: Nameperson });
    console.log(findByName);
  }
  module.exports = findPeopleByName;

