import { createToken } from '../../utils/createToken.js';
import bcrypt from 'bcrypt';
import User from "../../models/User.js";


const login = async (req, res) => {
   try {
      const foundUser = await User.findOne({ email: req.body.email });

      if (!foundUser) {
         return res.status(404).json({
            message: "Неверный логин или пароль"
         })
      }


      const passValid = await bcrypt.compare(req.body.password, foundUser._doc.pass);

      if (!passValid) {
         return res.status(404).json({
            message: "Неверный логин или пароль"
         })
      }


      const token = createToken(foundUser._id);

      const { pass, ...userData } = foundUser._doc;

      res.json({
         ...userData,
         token,
      });


   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не удалось авторизоваться',
      });
   }
};



export default login;
