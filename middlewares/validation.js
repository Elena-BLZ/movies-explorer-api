const { celebrate, Joi } = require('celebrate');

const urlRegEx = /https?:\/\/(www\.)?([\w-]+\.)+[\w]+[\w.\-~:/?#[\]@!$&'()*+,;=]+#?/i;

module.exports.usersJoi = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

module.exports.loginJoi = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

module.exports.userInfoJoi = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().email(),
  }),
});

module.exports.moviesJoi = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().integer().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(urlRegEx),
    trailerLink: Joi.string().required().pattern(urlRegEx),
    thumbnail: Joi.string().required().pattern(urlRegEx),
    movieId: Joi.string().alphanum().length(24).required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports.movieIdJoi = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().alphanum().length(24),
  }),
});
