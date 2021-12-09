// MongoDB and Mongoose - Delete Many Documents with model.remove().
const Person = require("../models/person");

async function removeManyPeople() {
  var nameToRemove = "Mary";
  const personDeleted = await Person.deleteMany({ name: nameToRemove });
  console.log(personDeleted);
}

module.exports = removeManyPeople;