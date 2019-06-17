const Experiences = require('../models/experience');

// Basic GET functionality
module.exports.getExperience = (callback, limit) => {
  Experiences.find(callback).limit(limit);
};

module.exports.addExperience = (expData, callback) => {
  Experiences.create(expData, callback);
};
