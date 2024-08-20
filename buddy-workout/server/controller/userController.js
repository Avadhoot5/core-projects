const User = require('../db/userModel');
const mongoose = require('mongoose');

const loginUser = (req, res) => {
    res.json({mssg: 'User logged in' });
}

const signupUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.signup(email, password);
        res.status(200).json({email, user});    
    } catch (error) {
        res.json({error: error.message});
    }
}


module.exports = {loginUser, signupUser}
