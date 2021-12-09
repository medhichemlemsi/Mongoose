// Perform New Updates on a Document Using model.findOneAndUpdate().
const Person = require("../models/person");

async function updateAge(PersonName) {
  const personUpdatedAge = await Person.findOneAndUpdate(
    { name: PersonName },
    { $set: { age: 20 } },
    { new: true }
  );

  console.log(personUpdatedAge);
}
module.exports = updateAge;