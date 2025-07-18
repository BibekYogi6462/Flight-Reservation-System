const { response } = require('express');
const {AirplaneService} = require('../services');
const {StatusCodes} = require('http-status-codes');

async function createAirplane(req, res){
      try{
            console.log("Inside Controller");
         const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
         });
         return res
         .status(StatusCodes.CREATED)
            .json({
                  success: true,
                  message: 'Successfully created an airplane',
                  data: airplane,
                  error: {}
            })
      }catch(error){
        return res 
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: false,
                  message: 'Something went wrong when creating airplane',
                  data: {},
                  error: error
                })

      }
}

module.exports = {
    createAirplane
}