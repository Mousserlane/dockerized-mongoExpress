const Skillset = require('../models/skillset');

// Basic GET functionality
module.exports.getSkillset = (callback, limit) => {
  Skillset.find(callback).limit(limit);
};

module.exports.addSkillset = (skillsetData, callback) => {
  Skillset.create(skillsetData, callback);
};
