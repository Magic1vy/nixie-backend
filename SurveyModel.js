const mongoose = require('mongoose');
const SurveySchema = new mongoose.Schema({
answers: [{
    question: String,
    answerType: String, 
    answer: String,
}],
createdAt: {
    type: Date,
    default: Date.now
}
});

module.exports = mongoose.model('Survey', SurveySchema);
