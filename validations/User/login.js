import Joi from 'joi';

export const loginValidate = Joi.object({
   email: 
      Joi.string()
      .email()
      .required()
      .messages({
         "email.base": "Неверный формат почты",
         'any.required': `Пожалуйста, укажите e-mail`
      }),
   password: 
      Joi.string()
      .required()
      .min(6)
      .pattern(new RegExp('^[a-zA-Z0-9]+$'))
      .messages({
         "string.pattern.base": "Пароль может содержать только латинские буквы и цифры",
         "string.empty": "Пароль не может быть пустым",
         "string.base": "Неверный формат пароля",
         "string.min": "Длина пароля минимум 6 символов",
         'any.required': `Пожалуйста, укажите пароль`
      })   
})