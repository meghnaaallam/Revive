//importing required modules
const ErrorResponse = require('../utils/errorResponse');

//creating a function for error handling
const errorHandler = (err, req, res, next) =>{
    
    //printing the error
    console.log(err);

    //getting error message
    let error = {...err}
    error.message = err.message;

    // Mongoose Bad ObjectId
    if (err.name === 'CastError'){
        const message = "Ressource not found";
        error = new ErrorResponse(message, 404);
    }

    //if duplicates found, returns status code - 400 
    if (err.code === 11000){
        const message = "Duplicate field value entered";
        error = new ErrorResponse(message, 400);
    }

    //if user's validation fails, returns status code - 400
    if  (err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(value => value.message);
        error = new ErrorResponse(message, 400);
    }

    //if server error, returns status code - 500
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    })
}

//exporting the function
module.exports = errorHandler;