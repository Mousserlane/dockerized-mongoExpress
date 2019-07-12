// @flow

const Experiences = require('../../models/experience');
const express = require('express');
const router = express.Router();

const get = router.get(
  '/experiences',
  async (req: Object, res: Object, _: Function): Promise<void> => {
    // NOTE Change _ to next if we're using middlewares
    try {
      const data: Array<Object> = await Experiences.getExperiences(50);
      res.status(200).send({ message: 'success', code: 200, data });
    } catch (error) {
      res.status(500).send({ message: 'Error While Fetching Data', error });
    }
  }
);

const add = router.post(
  '/experiences',
  async (req: Object, res: Object, _: Function): Promise<void> => {
    const experienceData: Object = req.body;
    try {
      await Experiences.postExperience(experienceData);
    } catch (error) {
      res.status(500).send({ message: 'Error while posting data', error });
    }
  }
);

module.exports = { get, add };
