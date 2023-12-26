import Users from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const secretKey = "sjfslfkdslfkdslfkjdslfjksl";

//REGISTER
export const userRegister = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userExist = await Users.findOne({ username: req.body.username });
    if (userExist) {
      return res.status(404).json({ message: "user already exist" });
    }
    const user = new Users({
      username: req.body.username,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { username: user.username, userId: user._id, role: user.role },
      secretKey,
      { expiresIn: "1h" }
    );
    await user.save();
    res.status(201).json({ message: "user created", token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//LOGIN
export const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({ username });
    if (!user) {
      res.status(404).json({ message: "user not found" });
    }
    if (!username) {
      res.status(404).json({ message: "Username not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ message: "Password doesn't match" });
      return;
    }
    const token = jwt.sign(
      { username: user.username, userId: user._id, role: user.role },
      secretKey,
      { expiresIn: "1h" }
    );
    res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Middleware
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "No token provided" });
//   }
//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ message: "Invalid token" });
//     }
//     req.user = decoded;
//     next();
//   });
// }
