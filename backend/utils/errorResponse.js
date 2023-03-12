//creating class to get error responses
class ErrorResponse extends Error{
    //creating constructor to display message and status-code
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}
//exporting the response module
module.exports = ErrorResponse;