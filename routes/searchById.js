// Use model.findById() to Search Your Database By _id.
const Person=require('../models/person');
async function findPersonById(id) {
    let person_id = await Person.findById({ _id: id });
    console.log(person_id);
    return person_id;
  }
  module.exports = findPersonById;