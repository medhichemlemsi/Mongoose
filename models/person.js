const mongoose=require('mongoose')
//create a schema
const personSchema = new mongoose.Schema({
    name:{type:String,
        required: true,
        trim:true
    },
    age: {type:Number},
    favoriteFoods:[{type:String}]
})
//create a person model 
const Person=mongoose.model('person',personSchema);

module.exports=Person