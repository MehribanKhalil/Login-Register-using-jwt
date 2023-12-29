import jwt from "jsonwebtoken";
import { secretKey } from "../controllers/auth.js";


function authenticateToken(roles,id) {
  return function (req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    const decoded = jwt.verify(token, secretKey);
    req.decoded= decoded
    if (!roles.includes(decoded.role) || id) {
      return res.status(400).json("Invalid token");
    }
    next();
  }
}


export default authenticateToken;
