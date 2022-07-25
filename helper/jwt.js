const redis = require("redis");
const JWTR = require("jwt-redis").default;
//ES6 import JWTR from 'jwt-redis';
const redisClient = redis.createClient();
// (async () => {
//   await redisClient.connect();
// })();

const jwtr = new JWTR(redisClient);

const SECRET_KEY = process.env.JWT_SECRET;
const createToken = (data) => {
  return jwtr.sign(data, SECRET_KEY, {
    expiresIn: "5h",
  });
};

const verifyToken = (req, res, next) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]);

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const decoded = jwtr.verify(token, config.SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

const destroyToken = (token) => {
  return jwtr.destroy(token);
};

module.exports = {
  createToken,
  verifyToken,
  destroyToken,
};
