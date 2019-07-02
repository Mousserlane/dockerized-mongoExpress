const biography = require('./biography/biographyController');
const experience = require('./experience/experienceController');
const knowledge = require('./knowledge/knowledgeController');
const skillset = require('./skillset/skillsetController');

module.exports.endpoints = mongoApp => {
  const callbacks = [
    experience.get,
    experience.add,
    biography.get,
    biography.add,
    knowledge.get,
    knowledge.add,
    skillset.get,
    skillset.add
  ];
  mongoApp.use('/api', callbacks);
};
