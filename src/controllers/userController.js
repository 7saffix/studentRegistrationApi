import studentModel from "../models/registrationModel.js";
import { encodeToken } from "../utilities/tokenUtility.js";


//registration 
export const studentRegistration =async(req,res)=>{
    try {
      const reqBody = req.body;
      const data =await studentModel.create(reqBody)
      res.json({status:200,message:'success',data:data})  
    } catch (error) {
      res.json({status:500,message:error.toString()}) 
    }
}

//logIn
export const studentLogin = async(req,res)=>{
  try {
    const reqBody = req.body
    let data = await studentModel.findOne(reqBody)

    if(data){
      let token = encodeToken(data['email'],data['_id'])

      let options = {
        limit : 30*24*60*60*1000,
        httpOnly:true,
        sameSite:"none",
        secure:true,
      }
      res.cookie('token',token,options)
      res.json({status:200,message:'success',data:data,token:token}) 
    } else{
      res.json({status:'failed',message:'user not found'}) 
    } 
  } catch (error) {
    res.json({status:500,message:error.toString()}) 
  }
}