
import express from 'express';
import { signIn, signUp, verifyAccount } from './user.controller.js';
import { checkEmail } from '../../middleware/checkEmail.js';
import { validation } from '../../middleware/validation.js';
import { userLogInSchema, userValidationSchema } from './user.validation.js';

const userRoutes = express.Router();


// checkEmail
userRoutes.post("/signup" , validation(userValidationSchema),   signUp)
userRoutes.post("/signin" ,  validation(userLogInSchema) ,signIn)

userRoutes.get("/verify/:token", verifyAccount)




export default userRoutes