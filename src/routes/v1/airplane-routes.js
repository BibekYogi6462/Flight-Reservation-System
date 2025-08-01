const express = require('express');
const { AirplaneController } = require('../../controllers');
const AirplaneMiddlewares = require('../../middlewares/airplane-middlewares');


const router = express.Router();

// Route to create a new airplane
router.post(
  '/', 
  AirplaneMiddlewares.validateCreateRequest, // Middleware to validate request body
  AirplaneController.createAirplane          // Controller to handle the creation logic
);

router.get(
  '/', 
  AirplaneController.getAirplanes          
);

router.get(
  '/:id', 
  AirplaneController.getAirplane          
);
router.delete(
  '/:id', 
  AirplaneController.destroyAirplane          
);

router.patch(
  '/:id',
  AirplaneMiddlewares.validateCreateRequest, // Optional validation
  AirplaneController.updateAirplane
);

module.exports = router;
