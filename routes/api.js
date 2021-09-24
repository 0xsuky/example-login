const express = require('express');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const { makeUser, findUser } = require('./controllers/userController.js');
const { SESSION_NAME, SESSION_CONFIG } = require('./common/constant.js');

const router = express.Router();
const sessionStorage = {};

router.post('/user', async (req, res, next) => {
  console.log(req.body);
  const { id, pw } = req.body;
  try {
    if (await makeUser({ id, pw })) {
      res.json({ msg: 'join success' });
    } else {
      res.json({ msg: 'join fail' });
    }
  } catch (err) {
    next(err);
  }
});

router.post('/session-cookie', async (req, res, next) => {
  const { id, pw } = req.body;
  try {
    const user = await findUser({ id, pw });
    if (await bcrypt.compare(pw, user.userpw)) {
      const sessionId = uuid.v4();
      res.cookie(SESSION_NAME, sessionId, SESSION_CONFIG);
      sessionStorage[sessionId] = {};
      res.json({ msg: 'login success' });
    } else {
      res.json({ msg: 'login fail' });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/jwt', async (req, res, next) => {
  const { id, pw } = req.body;
  try {
    const user = await findUser({ id, pw });
    if (await bcrypt.compare(pw, user.userpw)) {
      res.json({ msg: 'login success' });
    } else {
      res.json({ msg: 'login fail' });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
