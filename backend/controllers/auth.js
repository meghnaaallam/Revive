//importing required modules
const User = require("../models/user");
const ErrorResponse = require('../utils/errorResponse');

//exporting async function for user's signup
exports.signup = async (req, res, next)=>{

    //storing email 
    const {email} = req.body;

    //checking if its an existing user or not (returns 400 if user already exists)
    const userExist = await User.findOne({email});    
    if (userExist){
     return  next(new ErrorResponse('E-mail already exists', 400))
    }

    //if there is no user associated with the email, it creates a new one
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

//exporting async function for user's signin
exports.signin = async (req, res, next)=>{

    //checking valid credentials for signin
    try{
        const {email, password} = req.body;

        //if any of the values are empty
        if(!email || !password){
            return  next(new ErrorResponse('E-mail and password are required', 400))
        }

        //checks for valid user e-mail
        const user = await User.findOne({email});
        if(!user){
            return  next(new ErrorResponse('Invalid credentials', 400))
        }

        // verifies user password
        const isMatched = await user.comparePassword(password);
        if (!isMatched){
          return  next(new ErrorResponse('Invalid credentials', 400))
        }

        //if the credentials are correct, returns 200 - OK
        generateToken(user, 200, res);
    }
    catch(error){
        console.log(error);
        //if exception occurs due to some other reason
        next(new ErrorResponse('Cannot log in, check your credentials', 400))
    }
}

//exporting async function for generating token for password protection
const generateToken = async (user, statusCode, res) =>{

    //using jwtGenerateToken to get unique tokens
    const token = await user.jwtGenerateToken();

    //defining the options for token generation
    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.EXPIRE_TOKEN)
    };

    //storing the token for the current session
    res
    .status(statusCode)
    .cookie('token', token, options )
    .json({success: true, token})
}


//exporting async function for user's logout
exports.logout = (req, res, next)=>{
    //clearing the token from the session and returning status code 200 - OK
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "Logged out"
    })
}


//exporting async function for user's profile
exports.userProfile = async (req, res, next)=>{

    //search for the user - if user exists return 200 - OK
    const user = await User.findById(req.user.id);
    res.status(200).json({
        sucess: true,
        user
    });
}


//exporting async function for personalizing user's Profile
exports.singleUser = async (req, res, next)=>{

    //search for the user - if user exists return 200 - OK else throws error
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            sucess: true,
            user
        })
    } catch (error) {
        next(error)        
    }
}