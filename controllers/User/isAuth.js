
import UserModel from '../../models/User.js';


const isAuth = async (req, res) => {
   try {

      const foundUser = await UserModel.findById(req.userId)
      
      if (!foundUser) {
         return res.status(500).json({
            message: 'Не удалось авторизоваться',
         });
      }


      const { firstName, email, _id } = foundUser._doc;

      res.json({
         firstName,
         email,
         _id,
      });


   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не удалось зарегистрироваться',
      });
   }
}


export default isAuth;