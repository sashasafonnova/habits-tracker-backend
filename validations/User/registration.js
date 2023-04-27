import { body } from 'express-validator';

export const registration = [
   body('firstName', 'Некорректное имя').isString().isLength( {min: 2} ),
   body('email', 'Неверный формат почты').isEmail(),
   body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
];