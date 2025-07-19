import AppError from "../utili/appError.js"

export default function catchError(callBack) { 
    return (req,res,next) =>{
        callBack(req,res,next).catch(err => {
            // res.status(400).json({err})
            next(new AppError(err, 400))
        })
    }
 }