import bcrypt from 'bcrypt';
import { createToken } from '../../utils/createToken.js';

import UserModel from '../../models/User.js';

import { registrationValidate } from "../../validations/User/registration.js";



const registration = async (req, res) => {

   const { error, value } = registrationValidate.validate(req.body)
   if (error) {
      console.log(value)
      return res.status(400).json(error.message)
   }

   try {

      const foundUser = await UserModel.findOne({ email: req.body.email });

      if (foundUser) {
         res.status(404);
         res.json({
            message: "Пользователь уже существует"
         })
         return
      }


      const { password } = req.body;

      const hashPassword = await bcrypt.hash(password, 10);

      const doc = new UserModel({
         firstName: req.body.firstName,
         email: req.body.email,
         pass: hashPassword,
      })

      const registeredUser = await doc.save();

      const token = createToken(registeredUser._id);

      const { _id, email, firstName } = registeredUser._doc;

      res.json({
         _id, 
         email, 
         firstName,
         token,
      });


   } catch (err) {
      console.log(err);
      res.status(500);
      res.json({
         message: 'Не удалось зарегистрироваться',
      });
   }
}


export default registration;