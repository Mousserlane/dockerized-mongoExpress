const mongoose = require('mongoose');

// Schema Creation

const skillsetSchema = mongoose.Schema({
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

skillsetSchema.methods({});

skillsetSchema.statics = {
  getSkillset,
  postSkillset
};

function getSkillset(limit) {
  return new Promise((resolve, reject) => {
    Skillset.find((err, response) => {
      if (err) {
        reject(err);
      }
      resolve(response);
    }).limit(limit);
  });
}

function postSkillset(data) {
  return new Promise((resolve, reject) => {
    Skillset.create(data, (err, response) => {
      if (err) {
        reject(err);
      }
      resolve(response);
    });
  });
}

Skillset = module.exports = mongoose.model('Skillset', skillsetSchema);
