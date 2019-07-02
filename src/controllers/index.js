const biography = require('./biography/biographyController');
const experience = require('./experience/experienceController');
const knowledge = require('./knowledge/knowledgeController');
const skillset = require('./skillset/skillsetController');

module.exports.endpoints = mongoApp => {
  // mongoApp.use('/api', experience.get);
  // mongoApp.use('/api', experience.add);
  // mongoApp.use('/api', biography.get);
  // mongoApp.use('/api', bio)
  const callbacks = [
    experience.get,
    experience.add,
    biography.get,
    biography.add
  ];
  mongoApp.use('/api', callbacks);
};
