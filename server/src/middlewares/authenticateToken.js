import jwt from "jsonwebtoken";
import { secretKey } from "../controllers/auth.js";
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  const decoded = jwt.verify(token, secretKey);

  if (!decoded || decoded.role !== "admin") {
    return res.status(400).json("Invalid token");
  }
  next();
}

export default authenticateToken;
