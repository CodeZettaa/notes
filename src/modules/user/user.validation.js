import Joi from 'joi'


const userValidationSchema = Joi.object({
    name:Joi.string().min(3).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[A-Z][a-z0-9]{3,8}$')),
    re_password:Joi.ref("password"),
    age: Joi.number().min(5).required(),
})


const userLogInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[A-Z][a-z0-9]{3,8}$')),
 
})




export {
    userValidationSchema,
    userLogInSchema
}