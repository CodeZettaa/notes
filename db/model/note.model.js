import mongoose from "mongoose";



const noteSchema = new mongoose.Schema({
    title: String,
    description : String,
    createdBy: {
        type : mongoose.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps:true,
    versionKey:false
})


export const noteModel = mongoose.model("Note", noteSchema)