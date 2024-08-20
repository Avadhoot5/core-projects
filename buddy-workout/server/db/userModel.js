const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// If below const syntax is used, we will not be able to add the signup method to it.
// const User = mongoose.model('User', userSchema);

// creating own method for schema.
userSchema.statics.signup = async function(email, password) {

    // validation
    if (!email || !password) {
        throw Error('All fields are required');
    }
    if (!validator.isEmail(email)) {
        throw Error('Please enter a valid Email');
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password too weak');
    }

    const exists = await this.findOne({email});
    if (exists) {
        throw Error('Useremail already present');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hash});
    return user;
}


module.exports = mongoose.model('User', userSchema);
