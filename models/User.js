import mongoose from "mongoose";



const UserSchema = new mongoose.Schema(
   {
      firstName: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      pass: {
         type: String,
         required: true,
      },
   },
   {
      timestamps: true,
   },
);

export default mongoose.model('User', UserSchema);