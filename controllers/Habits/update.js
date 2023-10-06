
import HabitModel from '../../models/Habit.js';


const update = async (req, res) => {

   try {

      await HabitModel.updateOne({
         _id: req.params.id,
      }, 
      {
         category: req.body.category,
         title: req.body.title,
         status: req.body.status,
         habitLegth: req.body.habitLegth,
         progress: req.body.progress,
         lastUpdated:  req.body.lastUpdated,
      });

      const habit = await HabitModel.findById(req.params.id);

      const { createdAt, updatedAt, __v, ...data } = habit._doc;
      res.json({...data});

   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не удалось обновить трек',
      });
   }
}


export default update;