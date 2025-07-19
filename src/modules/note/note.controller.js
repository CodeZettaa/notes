import { noteModel } from "../../../db/model/note.model.js";
import catchError from "../../middleware/catchError.js";

const addNote = catchError(async (req, res) => {
  let addedNote = await noteModel.insertMany(req.body);
  res.json({ message: "Hi", addedNote });
});

const getNote = catchError(async (req, res) => {
  let notes = await noteModel.find({ createdBy: req.params.id });
  res.json({ message: "Hi", notes });
});

const getAllNote = catchError(async (req, res) => {
  let notes = await noteModel();
  res.json({ message: "Hi", notes });
});

const updateNote = catchError(async (req, res) => {
  let notes = await noteModel.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
  });
  res.json({ message: "Hi", notes });
});

const deleteNote = catchError(async (req, res) => {
  let note = await noteModel.findByIdAndDelete({
    _id: req.params.id,
    createdBy: req.params.userId,
  });
  res.json({ message: "Hi", note });
});
export { addNote, getNote, updateNote, deleteNote, getAllNote };
