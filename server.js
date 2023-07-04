const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./ReviewsRoutes');
const cors = require('cors');

require("dotenv").config();

mongoose.set('strictQuery', false);

const PORT = 8080 || process.env.PORT;

mongoose
        .connect(process.env.MONGODB_LINK)
        .then( ()=> console.log("Connected to MongoDB"))
        .catch ((err) => console.log(err))


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());
  

app.use(routes)

app.listen( PORT, () => {
    console.log(`Working on PORT ${PORT}`)
})