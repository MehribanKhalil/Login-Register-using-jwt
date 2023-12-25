import express from "express";
import { deleteUser, getAllUsers } from "../controllers/user.js";
import authenticateToken from "../middlewares/authenticateToken.js";

const myUsers = express.Router()

myUsers.get('/user',authenticateToken, getAllUsers)
myUsers.delete('/user/:id',authenticateToken, deleteUser)


export default myUsers