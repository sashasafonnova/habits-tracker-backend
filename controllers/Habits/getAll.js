
import HabitModel from '../../models/Habit.js';


const getAll = async (req, res) => {

   try {

      const habits = await HabitModel.find({ author: req.userId }).sort({ createdAt: "descending" }); // descending, ascending

      const habitsInfo = habits.map((habit) => {

         const { createdAt, updatedAt, __v, ...data } = habit._doc;
         return {
            ...data
         };
      })

      res.json(habitsInfo);


   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не удалось загрузить треки',
      });
   }
}


export default getAll;