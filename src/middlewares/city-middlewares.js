const { StatusCodes } = require("http-status-codes");
const {ErrorResponse} = require('../utils/common')


function validateCreateRequest(req, res, next){
    if(!req.body.name){
        ErrorResponse.message = 'Something went wrong when creating city';
        ErrorResponse.error = new AppError(['City name not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports = {
validateCreateRequest
}