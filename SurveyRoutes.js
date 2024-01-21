const { Router } = require('express');

const { getSurvey, saveSurvey } = require('./SurveyController');
const router = Router();

router.get('/', getSurvey);
router.post('/saveSurvey', saveSurvey);


module.exports = router;

