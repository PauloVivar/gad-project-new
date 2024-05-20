'use strict';

const { ADDRESS_TABLE } = require('./../models/address.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(ADDRESS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      country:{
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      state:{
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      parish: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      zipcode: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      geolocation:{
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ADDRESS_TABLE);
  }
};
