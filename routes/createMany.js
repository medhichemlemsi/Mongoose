//Create Many Records with model.create()
const Person = require("../models/person");

function createMany() {
  let arrayOfPeople = [
    {
      name: "Ahmed",
      age: 26,
      favoriteFoods: ["Lasagna", "spaghetti", "ravioli"],
    },
    {
      name: "Nabil",
      age: 42,
      favoriteFoods: ["Panuzzo", "Tacos", "Hotdog"],
    },
  ];
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.log(err);
    return console.log(data);
  });
}
module.exports = createMany;