import mongoose from "mongoose";

export const dbConnection = mongoose
  .connect("mongodb+srv://admin:admin@cluster0.lri9y.mongodb.net/")
  .then(() => console.log("DB connected"))
  .catch((error) => console.log("DB error", error));
