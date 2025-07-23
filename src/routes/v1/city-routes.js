const express = require('express');
const { CityController } = require('../../controllers');
const CityMiddlewares = require('../../middlewares/city-middlewares');


const router = express.Router();

// Route to create a new airplane
router.post(
  '/', 
  CityMiddlewares.validateCreateRequest,
  CityController.createCity      
);




module.exports = router;
