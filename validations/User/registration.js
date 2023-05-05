import Joi from 'joi';

export const registrationValidate = Joi.object({
   firstName: 
      Joi.string()
      .required()
      .pattern(new RegExp('^[а-яА-ЯёЁa-zA-Z]+$'))
      .messages({
         "string.pattern.base": "Имя может содержать латиницу или кириллицу",
         "string.empty": "Имя не может быть пустым",
         "string.base": "Неверный формат имени",
         'any.required': `Пожалуйста, укажите имя`
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
      }),
   email: 
      Joi.string()
      .email()
      .required()
      .messages({
         "email.base": "Неверный формат почты",
         'any.required': `Пожалуйста, укажите e-mail`
      }),
})