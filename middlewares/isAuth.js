import { decodeToken}  from '../utils/decodeToken.js';

export default (req, res, next) => {

   const token = req.headers.authorization.replace(/Bearer\s?/, '');

   if (token) {
      
      try {
         
         const decodedInfo = decodeToken(token);
         req.userId = decodedInfo._id;
         next();

      } catch (e) {

         return res.status(403).json({
            message: 'Нет доступа',
         });
      } 

   } else {

      return res.status(403).json({
         message: 'Нет доступа',
      });
   }

};