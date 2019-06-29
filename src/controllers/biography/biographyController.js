const Biography = require('../../models/bio');

// Basic GET functionality
module.exports.getBiography = callback => {
  Biography.findOne({ type: 'biography' }, callback); // Since there is no dynamic data fetching need for this, I think
  // we can just hard code the type here
};

// Basic POST functionality
module.exports.addBiography = (bioData, callback) => {
  Biography.create(bioData, callback);
};
