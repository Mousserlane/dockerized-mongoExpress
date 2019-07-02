const Biography = require('../../models/bio');
const express = require('express');
const router = express.Router();

const get = router.get('/biography', async (__, res, _) => {
  try {
    const data = await Biography.getBiography(50, 'Biography');
    res.status(200).send({ message: 'success', code: 200, data });
  } catch (error) {
    res.status(500).send({ message: 'Error while fetching data', error });
  }
});

const add = router.post('/biography', async (req, res, _) => {
  const biographyData = req.body;
  try {
    await Biography.postBiography(biographyData);
  } catch (error) {
    res.status(500).send({ message: 'Error while posting data', error });
  }
});

module.exports = { get, add };
