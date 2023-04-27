import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose";

import controllers from './controllers/index.js';

import validations from './validations/index.js';
import handleValidationErr from "./middlewares/handleValidationErr.js";

dotenv.config()

const app = express();


app.use(express.json());


mongoose.connect(process.env.MONGODB_URL)
   .then(() => console.log('DB ok'))
   .catch((err) => console.log('DB error', err));



app.listen(process.env.PORT || 3005, (err) => {
   if (err) {
      return console.log(err);
   }
   console.log('Server OK');
});



app.post('/registration', validations.registration, handleValidationErr, controllers.user.registration);
app.post('/login', validations.login, handleValidationErr, controllers.user.login);












