'use strict';
const { Op } = require('sequelize');  // ✅ Fix 1: Import Op

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'airbus340',
        capacity: 900,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'boeing777',
        capacity: 450,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airplanes', {
      [Op.or]: [
        { modelNumber: 'boeing777' },
        { modelNumber: 'airbus340' }   // ✅ Fix 2: wrap in object
      ]
    });
  }
};
