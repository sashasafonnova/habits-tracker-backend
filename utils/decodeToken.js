import jwt from 'jsonwebtoken';


export const decodeToken = (token) => {

   const decodedToken = jwt.verify(token, process.env.DB_PASS)
   return decodedToken;
   
}
