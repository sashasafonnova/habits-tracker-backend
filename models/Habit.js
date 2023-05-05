import mongoose from "mongoose";


const HabitSchema = new mongoose.Schema({
   author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
   },
   category: {
      type: String,
      required: true,
   },
   title: {
      type: String,
      required: true,
   },
   habitLength: {
      type: Number,
      default: 10,
      min: 10,
      max: 60,
      required: true
   },
   progress: {
      type: Number,
      default: 0,
      max: 60,
      required: true
   },
   dateCreated: {
      type: String,
      required: true
   },
   lastUpdated: {
      type: String,
      required: true,
   },
   status: {
      type: String,
      default: 'new',
      required: true,
   }
},
   {
      timestamps: true,
   }
);

export default mongoose.model('Habit', HabitSchema)