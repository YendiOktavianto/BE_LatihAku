const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;
const createToken = (data) => {
  return jwt.sign(
    data,
    SECRET_KEY,
  );
}

const readPayLoad = (token) => {
  return jwt.verify(token, SECRET_KEY);
}

module.exports = {
  createToken,
  readPayLoad
}