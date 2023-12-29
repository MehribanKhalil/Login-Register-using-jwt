import express from "express";
import { deleteUser, getAllUsers, updateUser } from "../controllers/user.js";
import authenticateToken from "../middlewares/authenticateToken.js";

const myUsers = express.Router()

myUsers.get('/user', getAllUsers)
myUsers.delete('/user/:id',authenticateToken(["admin"]), deleteUser)
myUsers.put('/user/:id',authenticateToken(["admin"]), updateUser)


export default myUsers