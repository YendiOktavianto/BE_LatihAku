const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET;
const createToken = (data) => {
  return jwt.sign(data, SECRET_KEY, {
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
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

const destroyToken = (data) => {
  if (!data) {
    return res.status(403).send("A token is required for authentication");
  }
  return jwt.sign(data, SECRET_KEY, { expiresIn: "1" });
};

module.exports = {
  createToken,
  verifyToken,
  destroyToken,
};
