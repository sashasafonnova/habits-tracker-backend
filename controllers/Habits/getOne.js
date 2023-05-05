
import HabitModel from '../../models/Habit.js';


const getOne = async (req, res) => {

   try {

      const habit = await HabitModel.findById(req.params.id);
      res.json(habit);

   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не удалось загрузить трек',
      });
   }
}


export default getOne;