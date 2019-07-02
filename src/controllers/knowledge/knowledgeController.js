const Knowledge = require('../../models/knowledge');
const express = require('express');
const router = express.Router();

const get = router.get('/knowledge', async (__, res, _) => {
  try {
    const data = await Knowledge.getKnowledge(50);
    res.status(200).send({ message: 'success', code: 200, data });
  } catch (error) {
    res.status(500).send({ message: 'Error while fetching data', error });
  }
});

const add = router.post('/knowledge', async (req, res, _) => {
  const knowledgeData = req.body;
  try {
    await Knowledge.postKnowledge(knowledgeData);
  } catch (error) {
    res.status(500).send({ message: 'Error while posting data', error });
  }
});

module.exports = { get, add };
