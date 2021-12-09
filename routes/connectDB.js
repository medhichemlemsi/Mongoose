const mongoose=require("mongoose");
async function connectDB(){
      try {
        await mongoose.connect('mongodb://localhost:27017/PersonsDB',{ useNewUrlParser: true,
          useUnifiedTopology: true,})
        console.log('DB is connected');
      } catch (error) {
        console.log('DB is not connected',error);
      } 
  
  
   
  
 
      
   

}
module.exports= connectDB;