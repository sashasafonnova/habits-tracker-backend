
import HabitModel from '../../models/Habit.js';
import { createHabitValidate } from '../../validations/Habit/createHabit.js';


const create = async (req, res) => {

   const { error, value } = createHabitValidate.validate(req.body)
   if (error) {
      return res.status(400).json(error.message)
   }

   try {

      const doc = new HabitModel({
         author: req.userId,
         category: req.body.category,
         title: req.body.title,
         habitLength: req.body.habitLength,
         dateCreated: req.body.dateCreated,
         lastUpdated: req.body.lastUpdated,
      })

      const createdHabit = await doc.save();

      const { createdAt, updatedAt, __v, ...data } = createdHabit._doc;

      res.json({ ...data });


   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не удалось создать трек',
      });
   }
}


export default create;