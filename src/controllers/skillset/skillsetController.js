const Skillset = require('../../models/skillset');
const express = require('express');
const router = express.Router();

const get = router.get('/skillset', async (__, res, _) => {
  try {
    const data = await Skillset.getSkillset(50);
    res.status(200).send({ message: 'success', code: 200, data });
  } catch (error) {
    res.status(500).send({ message: 'Error while fetching data', error });
  }
});

const add = router.post('/skillset', async (req, res, _) => {
  const skillsetData = req.body;
  try {
    await Skillset.postSKillset(skillsetData);
  } catch (error) {
    res.status(500).send({ message: 'Error while posting data', error });
  }
});

module.exports = { get, add };
