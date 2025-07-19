import { noteModel } from "../../../db/model/note.model.js";
import catchError from "../../middleware/catchError.js";
import AppError from "../../utili/appError.js";

const addNote = catchError(async (req, res) => {
  let addedNote = await noteModel.insertMany(req.body);
  console.log(addedNote);

  res.json({ message: "success", note: addedNote[0] });
});

const getNoteByUserId = catchError(async (req, res, next) => {
  let notes = await noteModel.find({ createdBy: req.params.userId });
  if (notes) {
    res.json({ message: "success", notes });
  } else {
    return next(new AppError("no note with this user", 404));
  }
});

const getAllNote = catchError(async (req, res) => {
  let notes = await noteModel.find();
  console.log(notes);

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
  res.json({ message: "success" });
});
export { addNote, getNote, updateNote, deleteNote, getAllNote };
