const mongoose = require('mongoose');

// Schema Creation

const knowledgeSchema = mongoose.Schema({
  // Schema is basically where we design the model object
  // What properties it'll have, its type, etc.
  field: {
    type: String,
    required: true
  },
  setlist: {
    type: [String]
  }
});

Knowledge = module.exports = mongoose.model('Knowledge', knowledgeSchema);
