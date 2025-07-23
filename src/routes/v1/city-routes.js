const express = require('express');
const { CityController } = require('../../controllers');
const CityMiddlewares = require('../../middlewares/city-middlewares');

const router = express.Router();

// Create a new city
router.post(
  '/', 
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
);

// Update an existing city by ID
router.patch(
  '/:id',
  CityController.updateCity
);

// Delete a city by ID
router.delete(
  '/:id',
  CityController.destroyCity
);

module.exports = router;
