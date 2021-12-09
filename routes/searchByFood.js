// Use model.findOne() to Return a Single Matching Document from Your Database.
const Person = require("../models/person");

async function findPeopleByCertainFood(food) {
  const favouritefood = await Person.findOne({ favoriteFoods: food });
  console.log(favouritefood);
}
module.exports = findPeopleByCertainFood;