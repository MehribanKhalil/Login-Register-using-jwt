import Users from "../models/users.js";
import bcrypt from "bcrypt";

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deleteUser = await Users.findByIdAndDelete(userId);
    if (!deleteUser) {
      return res.status(404).json({ message: "Not Found" });
    } else {
      res.status(200).json({ message: "User deleted", user: deleteUser });
    }
  } catch (error) {
    res.status(500).json({ message: error.error });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    res.send(users);
  } catch (error) {
    res.status(500).json({ message: error.error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 10);
    await Users.findByIdAndUpdate(userId, {
      username: username,
      password: hash,
    });

    res.status(200).json({ message: "user updated" });
  } catch (error) {
    res.status(500).json({ message: error.error });
  }
};

// export const updateUserByHimself = async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const decoded = req.decoded;
//     const { password, username } = req.body;
//     const hash = await bcrypt.hash(password, 10);
//     await Users.findByIdAndUpdate(userId, {
//       username: username,
//       password: hash,
//     });

//     res.status(200).json({ message: "user updated" });
//   } catch (error) {
//     res.status(500).json({ message: error.error });
//   }
// };
