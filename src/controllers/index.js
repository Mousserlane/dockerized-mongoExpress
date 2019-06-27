const biographyController = require('./biographyController');
const experienceController = require('./experienceController');
const knowledgeController = require('./knowledgeController');
const skillsetController = require('./skillsetController');

const Experiences = require('../models/experience');

module.exports.endpoints = mongoApp => {
  mongoApp.use('/api/experience', async (req, res) => {
    const expInstance = new Experiences();
    const exp = await expInstance._getExperiences(50);
    res.json(exp);
    // experienceController.getExperience((err, exp) => {
    //   if (err) {
    //     throw err; // Might want to create an abstraction on this one
    //   }
    //   res.json(exp);
    // }, 50);
  });
};
