// const redis = require("redis");
// const JWTR = require("jwt-redis").default;
//ES6 import JWTR from 'jwt-redis';
// const redisClient = redis.createClient({
//   host: "127.0.0.1",
//   port: "6379",
// });
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET;
const createToken = (data) => {
  //   await redisClient.connect();
  //   redisClient.on("connect", () => {
  //   console.log("client connect to redis");
  //   });
  //const jwtr = new JWTR(redisClient);
  return jwt.sign(data, SECRET_KEY, {
    expiresIn: "5h",
  });
};

const verifyToken = (req, res, next) => {
  // await redisClient.connect();
  // const jwtr = new JWTR(redisClient);
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]);

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

// const destroyToken = async (token) => {
//   // await redisClient.connect();
//   // const jwtr = new JWTR(redisClient);
//   //return jwtr.destroy(token);
// };

const destroyToken = (token) => {
  // const token =
  //   req.body.token ||
  //   req.query.token ||
  //   req.headers["x-access-token"] ||
  //   (req.headers.authorization && req.headers.authorization.split(" ")[1]);

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  return jwt.sign(token, SECRET_KEY, { expiresIn: "5h" });
  // , (logout, err) => {
  //   if (logout) {
  //     return "You have been Logged Out";
  //   }
  //   //res.send({ msg: "You have been Logged Out" });
  //   // } else {
  //   //   throw new Error("ERROR_LOGGED_OUT");
  //   // }
  // });
};
module.exports = {
  createToken,
  verifyToken,
  destroyToken,
};
