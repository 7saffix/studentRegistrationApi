import jwt from "jsonwebtoken"

export const encodeToken = (email,user_id)=>{
    const KEY = 'abc123';
    const EXPIRE = {expiresIn:'24h'};
    const PAYLOAD = {email,user_id}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}