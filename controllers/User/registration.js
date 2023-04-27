import bcrypt from 'bcrypt';
import { createToken } from '../../utils/createToken.js';

import UserModel from '../../models/User.js';


const registration = async (req, res) => {
   try {
      const { password } = req.body;

      const hashPassword = await bcrypt.hash(password, 10);

      const doc = new UserModel({
         firstName: req.body.firstName,
         email: req.body.email,
         pass: hashPassword,
      })

      const registeredUser = await doc.save();

      const token = createToken(registeredUser._id);

      const { pass, ...userData } = registeredUser._doc;

      res.json({
         ...userData,
         token,
      });


   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не удалось зарегистрироваться',
      });
   }
}


export default registration;