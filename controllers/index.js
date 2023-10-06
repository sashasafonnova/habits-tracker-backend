import registration from './User/registration.js';
import isAuth from './User/isAuth.js';
import login from './User/login.js';

import create from './Habits/create.js';
import getAll from './Habits/getAll.js';
import getOne from './Habits/getOne.js';
import remove from './Habits/remove.js';
import update from './Habits/update.js';




const controllers = {
   user: {
      login,
      registration,
      isAuth
   },
   habits: {
      create,
      getAll,
      remove,
      getOne,
      update,
   },
}


export default controllers;