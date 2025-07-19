



import express from 'express';
import { addNote,getNote, updateNote,deleteNote } from './note.controller.js';
import { verifyToken } from '../../middleware/verifyToken.js';

const noteRoutes = express.Router();


// noteRoutes.use("/note",verifyToken)
noteRoutes.post("/note" ,addNote  )
noteRoutes.get("/note" ,getNote  )

noteRoutes.put("/note/:id",updateNote)


noteRoutes.delete("/note/:id",deleteNote )



export default noteRoutes;