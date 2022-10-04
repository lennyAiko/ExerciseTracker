const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json()); // return responses as json

// DB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("The DB connection has been established, now you can CRUD.")
});

// setting up routes
const exercisesRoutes = require('./routes/exercises');
const usersRoutes = require('./routes/users');

app.use('/exercises', exercisesRoutes);
app.use('/users', usersRoutes);

// start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})