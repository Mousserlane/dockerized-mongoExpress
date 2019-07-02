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

knowledgeSchema.method({});

knowledgeSchema.statics = {
  getKnowledge,
  postKnowledge
};

function getKnowledge(limit) {
  return new Promise((resolve, reject) => {
    Knowledge.find((err, obj) => {
      if (err) {
        console.log('error', err);
        reject(err);
      } else {
        resolve(obj);
      }
    }).limit(limit);
  });
}

function postKnowledge(data) {
  return new Promise((resolve, reject) => {
    Knowledge.create(data, (err, response) => {
      if (err) {
        reject(err);
      }
      resolve(response);
    });
  });
}

Knowledge = module.exports = mongoose.model('Knowledge', knowledgeSchema);
