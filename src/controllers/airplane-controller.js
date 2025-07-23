const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes'); // ✅ Fixed import
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse); // ✅ Fixed usage
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse); // ✅ Added fallback
  }
}

async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse); // ✅ Fixed usage
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse); // ✅ Added fallback
  }
}

module.exports = {
  createAirplane,
  getAirplanes
};
