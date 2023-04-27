import { body } from 'express-validator';

export const login = [
   body('email', 'Неверный формат почты').isEmail(),
   body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
];