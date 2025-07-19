
import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    name:String,
    email: {
        type:String
    },
    password: String,
    age: {
        type:Number,
        min:5
    },
    isConfirmed : {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['admin','user'],
        default: 'user'
    },
    otpCode:String,
    otpExpire: Date
} , {
    timestamps: true,
    versionKey: false
});

const userModel = mongoose.model("User", userSchema);

export default userModel;



// signup ....... send email  .... button verfiy ..... isConfirmed : true ... login ..bravo