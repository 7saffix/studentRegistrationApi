import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

//CONNECT DB
(async()=>{
    try {
       await mongoose.connect('mongodb://localhost:27017/studentRegistration',{ autoIndex: true }) ;
      console.log('mongoDB connected successfully');
    } catch (error) {
        console.log(error)
    }
})();

app.listen(()=>{
    console.log(`server running success at port :: ${PORT}`);
})
