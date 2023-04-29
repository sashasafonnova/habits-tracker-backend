import registration from './User/registration.js';
import isAuth from './User/isAuth.js';
import login from './User/login.js';

const controllers = {
   user: {
      login,
      registration,
      isAuth
   }
}


export default controllers;