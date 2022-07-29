const express = require('express');
const mongoose = require('mongoose');


const { PORT = 3000 } = process.env;

const routes = require('./routes/index');

mongoose.connect('mongodb://localhost:27017/moviesdb');


const app = express();


app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
