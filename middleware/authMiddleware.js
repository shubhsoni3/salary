const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.cookie?.split("=")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }
  try {
    const decoded = jwt.verify(token, "1234");
    req.user = decode;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden Invalid token" });
  }
};

module.exports = authMiddleware;
