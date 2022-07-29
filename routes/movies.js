const router = require('express').Router();
const { moviesJoi, movieIdJoi } = require('../middlewares/celebrate');

const {
  getSavedMovies, createMovie, delMovie
} = require('../controllers/movies');

router.get('/', getSavedMovies); // возвращает все сохранённые текущим  пользователем фильмы
router.delete('/_id', movieIdJoi, delMovie); // удаляет сохранённый фильм по id
router.post('/', moviesJoi, createMovie);
// создаёт фильм с переданными в теле
// country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId
module.exports = router;
