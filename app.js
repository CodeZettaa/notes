import express from "express";
import { dbConnection } from "./db/dbConnection.js";
import userRoutes from "./src/modules/user/user.routes.js";
import noteRoutes from "./src/modules/note/note.routes.js";
import AppError from "./src/utili/appError.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file, "file");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "iti-" + uniqueSuffix + "_" + file.originalname);
  },
});

function fileFilter(req, file, cb) {
  // The function should call `cb` with a boolean
  // to indicate if the file should be accepted
  console.log(req.file, "hello from filter");

  if (file.mmetype != "image/png") {
    cb(null, false);
  } else {
    cb(null, true);
  }
  // To reject this file pass `false`, like so:
  //

  // To accept the file pass `true`, like so:

  // You can always pass an error if something goes wrong:
  // cb(new Error('I don\'t have a clue!'))
}
const upload = multer({ storage: storage, fileFilter });
const app = express();
const port = 8888;
import cors from "cors";

app.use(cors());
// dbConnection
app.use(express.json());
app.use(userRoutes);
app.use(noteRoutes);

app.post("/profile", upload.array("avatar", 10), function (req, res, next) {
  console.log(req.files);

  res.json({ message: "Hi" });
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});
// not found routes
app.use("*", (req, res, next) => {
  // res.status(404).json({message:"URL not found"})
  next(new AppError("URL not found", 404));
});

app.use((err, req, res, next) => {
  res.status(err.statusCode).json({ message: err.message });
});

// middleware

app.get("/", (req, res) => res.send({ message: "Hello World!" }));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// user

// note

// operational error
// invalid path

// programming error
// await async

// try catch
// then ... catch
