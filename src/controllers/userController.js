import registrationModel from "../models/registrationModel.js";


//student registration 
export const studentRegistration =async(req,res)=>{
    try {
      const reqBody = req.body;
      const data =await registrationModel.create(reqBody)
      res.json({status:200,message:'success',data:data})  
    } catch (error) {
      res.json({status:500,message:error.toString()}) 
    }
}