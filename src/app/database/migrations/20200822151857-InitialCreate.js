'use strict';

const { password } = require("../../../config/database");

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('Users',
      {
        Id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true
        },
        Name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        Email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        CreatedAt:{
          type:Sequelize.DATE,
          allowNull:false
        },
        UpdatedAt:{
          type:Sequelize.DATE,
          allowNull:false
        }
      });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('Users');

  }
};
