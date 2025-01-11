import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import { loginUser, registerUser } from "../services/auth.service.js";

export const register = async (req, res) => {
    try {

        const newUser = await registerUser(req.body);

        const {password, ...data} = newUser._doc;

        res.status(200).json({
            data,
            message: "User has been registered"
        });

    } catch (error) { // Catch the error and define it as 'error'
        res.status(500).json({
            error: error.message || error,
            message: 'Error occurred registering user'
        });
        console.log(error); // Log the error for debugging
    }
};

export const login = async (req, res)=>{
    try {
        const loggedInUser = await loginUser(req.body);
        const {password, ...data} = loggedInUser._doc;

        res.status(200).json({
            message: "User Login Successful",
            data,
        });
        
    } catch (error) { // Catch the error and define it as 'error'
        res.status(500).json({
            error: error.message || error,
            message: 'Error Logging in'
        });
        console.log(error); // Log the error for debugging
    }
};