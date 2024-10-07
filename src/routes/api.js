import express from "express";
import { readProfile, studentLogin, studentRegistration, updateProfile } from "../controllers/userController.js";
import { authVerify } from "../middlewares/authMiddleware.js";

const router =express.Router();


//student api
router.post('/studentRegistration',studentRegistration)
router.post('/studentLogin',studentLogin)
router.get('/readProfile',authVerify,readProfile)
router.post('/updateProfile',authVerify,updateProfile)


export default router