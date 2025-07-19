import { noteModel } from "../../../db/model/note.model.js";
import catchError from "../../middleware/catchError.js";

const addNote = catchError(async (req, res) => {
  let addedNote = await noteModel.insertMany(req.body);
  res.json({ message: "success", addedNote });
});

const getNote = catchError(async (req, res) => {
  console.log(req.params.id);

  let notes = await noteModel.findById(req.params.id);
  res.json({ message: "success", notes });
});

const getAllNote = catchError(async (req, res) => {
  let notes = await noteModel.find();
  res.json({ message: "success", notes });
});

const updateNote = catchError(async (req, res) => {
  let notes = await noteModel.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
    },
    { new: true }
  );
  res.json({ message: "success", notes });
});

const deleteNote = catchError(async (req, res) => {
  let note = await noteModel.findByIdAndDelete({
    _id: req.params.id,
    createdBy: req.params.userId,
  });
  res.json({ message: "success", note });
});
export { addNote, getNote, updateNote, deleteNote, getAllNote };
