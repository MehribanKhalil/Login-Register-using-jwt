import express from 'express'
import mongoose from 'mongoose'
import Users from '../models/users.js'


export const deleteUser = async (req,res) => {
    try {
        const userId = req.params.id
        const deleteUser= await Users.findByIdAndDelete(userId)
        if(!deleteUser) {
            return res.status(404).json({message: 'Not Found'})
        } else {
                res.status(200).json({message:'User deleted', user: deleteUser})
        }
    } catch (error) {
        res.status(500).json({message: error.error})
    }
}

export const getAllUsers = async (req,res) => {
    try {
        const users = await Users.find({})
        res.send(users)
    } catch (error) {
        res.status(500).json({message: error.error})
    }
}