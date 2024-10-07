import express from "express";
import mongoose from "mongoose";
import router from "./src/routes/api.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//CONNECT DB
;(async()=>{
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/studentRegistration',{ autoIndex: true }) ;
      console.log('mongoDB connected successfully');
    } catch (error) {
        console.log(error)
    }
})();

app.use('/api',router);

app.listen(PORT,()=>{
    console.log(`server running success at port :: ${PORT}`);
})
