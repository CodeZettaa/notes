import { noteModel } from "../../../db/model/note.model.js"
import catchError from "../../middleware/catchError.js"


const addNote = catchError(async(req,res) => {

    req.body.createdBy = req.user._id
    let addedNote = await noteModel.insertMany(req.body)

    res.json({message:"Hi",addedNote})
})


// find ... []
// findOne ... {} ... null
// findId
const getNote = catchError(async(req,res) => {
    
    let notes =  await noteModel.find({createdBy: "66914e393496ec9cb10ad158"}).populate("createdBy")
     res.json({message:"Hi",notes})
 })

// findByIdAndUpdate ... {}
// findOneAndUpdate ... {}
// findOneAndReplace ... {}


// updateOne
// updateMany
// replaceOne
const updateNote =catchError( async(req,res) => {
    let notes =  await noteModel.findByIdAndUpdate(req.params.id, {title:req.body.title})
     res.json({message:"Hi",notes})
 })
 


 const deleteNote = catchError(async(req,res) => {

    let note =  await noteModel.findByIdAndDelete({_id:req.params.id,createdBy: req.user._id})
    res.json({message:"Hi",note})

 })
export {
    addNote,
    getNote,
    updateNote,
    deleteNote
}