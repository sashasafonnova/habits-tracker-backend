import Joi from 'joi';

export const createHabitValidate = Joi.object({
   category: 
      Joi.string()
      .required()
      .messages({
         "string.base": "Неверно указана категория",
         "string.empty": "Категория не может быть пустой",
         'any.required': `Пожалуйста, укажите категорию`
      }),
   title: 
      Joi.string()
      .required()
      .messages({
         "string.empty": "Название трека не может быть пустым",
         "string.base": "Некорректно указано название трека",
         'any.required': `Пожалуйста, укажите название трека`
      }),
   habitLength:
      Joi.number()
      .required()
      .min(10)
      .max(60)
      .messages({
         "number.base": "Некорректный формат",
         "number.min": "Минимальное значение 10",
         "number.max": "Максимальное значение 60",
         'any.required': `Пожалуйста, укажите продолжительность трека`
      }),
   progress:
      Joi.number()
      .required()
      .max(60)
      .messages({
         "number.base": "Некорректный формат",
         "number.max": "Максимальное значение 60",
         'any.required': `Пожалуйста, укажите значение`
      }),
   dateCreated:
      Joi.string()
      .required()
      .messages({
         "string.empty": "Дата создания не может быть пустой",
         "string.base": "Некорректный формат",
         'any.required': `Пожалуйста, укажите дату создания`
      }),
   lastUpdated:
      Joi.string()
      .required()
      .messages({
         "string.empty": "Параметр не может быть пустым",
         "string.base": "Некорректный формат",
         'any.required': `Пожалуйста, укажите дату последнего обновления`
      }),
   status:
      Joi.string()
      .messages({
         "string.base": "Некорректный формат статуса",
         "string.empty": "Статус не может быть пустым",
         "boolean.base": "Некорректный формат",
      }),
})
