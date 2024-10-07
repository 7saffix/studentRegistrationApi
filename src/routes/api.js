import express from "express";
import { studentLogin, studentRegistration } from "../controllers/userController.js";

const router =express.Router();


//student api
router.post('/studentRegistration',studentRegistration)
router.post('/studentLogin',studentLogin)


export default router