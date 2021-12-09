// Delete One Document Using model.findByIdAndRemove.
const Person = require("../models/person");

async function deletePerson(id) {
  const personDeleted = await Person.findByIdAndRemove(id);
  console.log(personDeleted + "got deleted successfully! ");
}

module.exports = deletePerson;