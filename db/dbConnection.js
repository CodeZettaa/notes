import mongoose from 'mongoose';


export const dbConnection = mongoose.connect("mongodb://127.0.0.1:27017/ITINoteApp")
.then(()=>console.log('DB connected'))
.catch(()=>console.log('DB error'))



