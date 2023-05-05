
import HabitModel from '../../models/Habit.js';


const remove = async (req, res) => {

   try {

      await HabitModel.findByIdAndDelete(req.params.id)
         .then(function (doc) {

            if (!doc) {
               return res.status(404).json({
                  message: 'Трек не найден',
               });
            }

            res.json({
               message: "Трек успешно удален"
            });
         })

         .catch(function (err) {
            console.log(err);
            return res.status(500).json({
               message: 'Не удалось удалить трек',
            });
         });


   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не удалось получить треки',
      });
   }
};


export default remove;