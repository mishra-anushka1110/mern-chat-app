const mongoose  = require("mongoose");

require("dotenv").config();
//connect mongoDB to our node app
mongoose.connect("mongodb+srv://ankitrajmarch13:anushka@cluster0.y8cuofi.mongodb.net/?retryWrites=true&w=majority", (err)=>{
    if(err){
             console.log(err.message)
    }else{
              console.log('connected to mongodb')
    }
})