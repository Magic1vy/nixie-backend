const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./ReviewsRoutes');
const surveyRoutes = require("./SurveyRoutes");
const cors = require('cors');
const helmet = require('helmet');

require("dotenv").config();

mongoose.set('strictQuery', false);

const PORT = process.env.PORT || 8080;


mongoose
        .connect(process.env.MONGODB_LINK)
        .then( ()=> console.log("Connected to MongoDB"))
        .catch ((err) => console.log(err))


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());
  

app.use(routes);
app.use(surveyRoutes);


app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'"],
        connectSrc: ["'self'"],
        reportUri: '/report-violation',
      },
    },
  }));

app.listen( PORT, () => {
    console.log(`Working on PORT ${PORT}`)
})