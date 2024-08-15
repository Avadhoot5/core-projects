const express = require('express');
require('dotenv').config();
const workoutRoutes = require('./routes/workouts');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


// middleware
app.use(cors());
app.use(express.json());

app.use('/', (req, res, next) => {
    console.log(req.method);
    next();
})


app.use('/api/workouts', workoutRoutes);

// connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Database connected"))
.catch((error) => console.log(error))


app.listen(process.env.PORT, () => {
    console.log("App is now Listening");
})

