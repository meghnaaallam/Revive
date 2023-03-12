//importing required modules
const jwt = require('jsonwebtoken');
const User = require("../models/user");
const ErrorResponse = require('../utils/errorResponse');

//exporting the async function fro Authenticated users
exports.isAuthenticated = async (req, res, next) =>{
    //if the token exists in cookies if not return status code 401
    const {token} = req.cookies;
    // make sure token exists
    if (!token){
        return next (new ErrorResponse('You must log in to access this ressource', 401));
    }
    //double checks the existing token
    try {
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } 
    //if the token is invalid return status code 401
    catch (error) {
        return next (new ErrorResponse('You must log in to access this ressource', 401));
    }
}