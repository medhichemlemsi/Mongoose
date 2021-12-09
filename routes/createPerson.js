const Person=require("../models/person");

async function createPerson() {
    var newPerson=new Person({
        name:"Kevin",
        age:35,
        favoriteFoods:["Pizza","Makloub","Libanais"],
    });
    try {
        const result=await newPerson.save();
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}
module.exports= createPerson;