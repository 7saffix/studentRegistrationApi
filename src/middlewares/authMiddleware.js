import { decodeToken } from "../utilities/tokenUtility.js"


export const authVerify = (req,res,next)=>{
    const token = req.cookies.token
    const decoded = decodeToken(token)
    if(decoded==null){
        res.json({status:'failed',message:'unauthorized'})
    }else{
        req.headers.email = decoded['email']
        req.headers.user_id = decoded['user_id']
    }
}