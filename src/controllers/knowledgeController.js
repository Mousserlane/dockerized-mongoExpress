const Knowledge = require('../models/knowledge');

// Basic GET functionality
module.exports.getKnowledge = (callback, limit) => {
  Knowledge.find(callback).limit(limit);
};

module.exports.addKnowledge = (knowledgeData, callback) => {
  Knowledge.create(knowledgeData, callback);
};
