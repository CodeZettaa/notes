import userModel from "../../../db/model/user.model.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
import sendOurEmail from "../../email/email.js";
import catchError from "../../middleware/catchError.js";
import AppError from "../../utili/appError.js";
// email ....check with email
// if email founded ....... res.send already register
// if email not found .... create user

const signUp = catchError(async (req, res, next) => {
  let foundedUser = await userModel.findOne({ email: req.body.email }); //true

  if (foundedUser) {
    return next(new AppError("user already exist", 409));
  }
  let addedUser = await userModel.insertMany(req.body);
  addedUser[0].password = undefined;
  // sendOurEmail(req.body.email)
  res.status(201).json({ message: "Done", addedUser });
});

const signIn = catchError(async (req, res, next) => {
  let foundedUser = await userModel.findOne({ email: req.body.email }); //true

  if (!foundedUser)
    return next(new AppError("email or password is invalid", 422));

  // if(foundedUser.isConfirmed == false)
  //     return res.status(401).json({message:"U should verify ur account"})

  const token = jwt.sign({ email: req.body.email }, "Note");
  if (foundedUser.password == req.body.password) {
    res.json({ message: "welocme", token, id: foundedUser._id });
  } else {
    return next(new AppError("email or password is invalid", 422));
  }
});

const verifyAccount = catchError(async (req, res, next) => {
  jwt.verify(req.params.token, "nourEmail", async (err, decoded) => {
    // if(err) return res.status(400).json({message:"invalid token"})
    if (err) return next(new AppError("invalid token", 400));

    await userModel.findOneAndUpdate({ email: decoded }, { isConfirmed: true });

    res.json({ message: "welcome" });
  });
});
export { signUp, signIn, verifyAccount };
