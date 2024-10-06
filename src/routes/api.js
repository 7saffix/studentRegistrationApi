import express from "express";
import { studentRegistration } from "../controllers/userController.js";

const router =express.Router();


//create student
router.post('/studentRegistration',studentRegistration)


export default router