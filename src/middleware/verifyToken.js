
import jwt from 'jsonwebtoken';


export const verifyToken = (req,res,next) => {
    let {token}= req.headers;

    jwt.verify(token,"treka", (err,decoded) => {
        if(err) return res.status(401).json({message:"invalid token"})
        req.user = decoded
        next()
    })
}