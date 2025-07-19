import express from "express";
import {
  addNote,
  updateNote,
  deleteNote,
  getNoteByUserId,
} from "./note.controller.js";
import { verifyToken } from "../../middleware/verifyToken.js";

const noteRoutes = express.Router();

// noteRoutes.use("/note",verifyToken)
noteRoutes.post("/note", addNote);
// noteRoutes.get("/note", getAllNote);
noteRoutes.get("/note/:userId", getNoteByUserId);

noteRoutes.put("/note/:id", updateNote);

noteRoutes.delete("/note/:id/:userId", deleteNote);

export default noteRoutes;
