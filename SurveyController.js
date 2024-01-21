const SurveyModel = require('./SurveyModel');


module.exports.getSurvey = async (req, res) => {
    const Survey = await SurveyModel.find();
    res.send(Survey)
}

module.exports.saveSurvey = async (req, res) => {
    const newSurvey = {
        answers: req.body.answers
    }
    SurveyModel.create(newSurvey)
    .then((data) => {
        console.log("Survey added");
        res.send(data);
    } )
    .catch((error) => {
            console.log(error);
            res.status(500).send("Failed to save survey");
        });
}
