import { createToken } from '../../utils/createToken.js';
import bcrypt from 'bcrypt';
import UserModel from "../../models/User.js";

import { loginValidate } from "../../validations/User/login.js";



const login = async (req, res) => {

      const { error, value } = loginValidate.validate(req.body)
      if (error) {
         console.log(value)
         return res.status(400).json(error.message)
      }
   

   try {
      const foundUser = await UserModel.findOne({ email: req.body.email });

      if (!foundUser) {
            res.status(404);
            res.json({
               message: "Неверный логин или пароль"
            })
            return 
      }


      const passValid = await bcrypt.compare(req.body.password, foundUser._doc.pass);

      if (!passValid) {
         res.status(404);
         res.json({
            message: "Неверный логин или пароль"
         })
         return 
      }


      const token = createToken(foundUser._id);

      const { _id, firstName, email } = foundUser._doc;

      res.json({
         _id, 
         firstName, 
         email,
         token,
      });


   } catch (err) {
      console.log(err);
      res.status(500);
      res.json({
         message: 'Не удалось зарегистрироваться',
      });
   }
};



export default login;
