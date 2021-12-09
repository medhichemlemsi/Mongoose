// Chain Search Query Helpers to Narrow Search Results.
const Person = require("../models/person");

async function findPersonBurritos() {
  const personBurritos = await Person.find({ favoriteFoods: "burritos" })
    .sort({
      name: 1,
    })
    .limit(2)
    .select({ name: 1, favoriteFoods: 1 });
  console.log(personBurritos);
}

module.exports = findPersonBurritos;