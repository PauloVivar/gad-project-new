'use strict';

const { USER_TABLE } = require('../models/user.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(USER_TABLE, 'avatar',
      {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.changeColumn(USER_TABLE, 'avatar');
  }
};
