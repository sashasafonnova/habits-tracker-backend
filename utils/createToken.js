import jwt from 'jsonwebtoken';


export const createToken = (id) => {

   const token = jwt.sign( 
      {
         _id: id,
      },
      process.env.DB_PASS,
      {
         expiresIn: '12h',
      },
   )
      return token;
   
}
