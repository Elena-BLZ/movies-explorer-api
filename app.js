require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');

const { PORT = 3000 } = process.env;
const { errorProcessor } = require('./middlewares/error-processor');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const routes = require('./routes/index');

const options = {
  origin: [
    'http://localhost:3000',
    'https://mesto.blz.nomoredomains.xyz',
    'https://Elena-BLZ.github.io',
  ],
  credentials: true, // эта опция позволяет устанавливать куки
};

mongoose.connect('mongodb://localhost:27017/moviesdb');

const app = express();

app.use('*', cors(options));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger); // подключаем логгер запросов

app.use(routes);
app.use(errorLogger); // подключаем логгер ошибок

app.use(errors());
app.use(errorProcessor);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
