const User = require('../db/userModel');
const mongoose = require('mongoose');

const loginUser = (req, res) => {
    res.json({mssg: 'User logged in' });
}

const signupUser = (req, res) => {
    res.json({mssg: 'User signed up'});
}


module.exports = {loginUser, signupUser}
