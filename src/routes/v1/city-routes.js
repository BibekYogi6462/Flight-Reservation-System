const express = require('express');
const { CityController } = require('../../controllers');
const AirplaneMiddlewares = require('../../middlewares/airplane-middlewares');


const router = express.Router();

// Route to create a new airplane
router.post(
  '/', 
  CityController.createCity      
);




module.exports = router;
