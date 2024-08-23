const jwt = require('jsonwebtoken');
const User = require('../db/userModel');

const requireAuth = async (req, res, next) => {

    // verify authentication
    const authHead = req.headers.authorization;

    if (!authHead) {
        res.status(401).json({error: 'Required authorization in headers'});
    }

    if (authHead) {
        try { 
            const token = authHead.split(' ')[1];
            if (!token) {
                res.status(401).json({error: 'Invalid token'})
            }
            if (token) {
                const {_id} = jwt.verify(token, process.env.SECRET);
                req.user = await User.findOne({_id}).select('_id');
                next();
            }
        } catch(error) {
            console.log(error);
            res.status(401).json({error: 'Request is not authorized'})
        }
    }
}

module.exports = requireAuth;