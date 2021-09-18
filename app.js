const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const Task = require('./models/task');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

const dbURI = 'mongodb+srv://stige:stige@stige-week7-mogodb-basi.cttbz.mongodb.net/stige-week7?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    //console.log("result: of DBURI:- ", result);
    app.listen(process.env.PORT || 5000);
  })
  .catch(err => console.log(err));


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.redirect('/tasks');
});


app.use(taskRoutes);
// app.use('/tasks', taskRoutes);
