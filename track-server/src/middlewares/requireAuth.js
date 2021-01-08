const jwt      = require('jsonwebtoken');
const mongoose = require('mongoose');
const User     = mongoose.model('User');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // authorization === 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmY4NTM2MDE2MTY5NjQ2NzI0MGY1YzYiLCJpYXQiOjE2MTAxMDk3OTJ9.7284Q5g0ISUYMoB9wr63W3Ot1numWnBWzFAXNHOLux0'

  if (!authorization) {
    return res.status(401).send({ error : 'You must be logged in.' });
  }

  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
    if (err) {
      return res.status(401).send({ error : 'You must be logged in.' });
    }

    const { userId } = payload;

    const user = User.findById(userId);
    req.user = user;

    next();
  })
};
