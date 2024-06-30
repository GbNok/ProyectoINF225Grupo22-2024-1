'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create Users table
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      rut: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      user_type: {
        type: Sequelize.INTEGER
      }
    });

    // Create Requests table
    await queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rut: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      valor_credito: {
        type: Sequelize.INTEGER
      },
      tasa: {
        type: Sequelize.INTEGER
      },
      plazo: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false // You can adjust the default value as needed
      },
      id_ejecutivo: {
        allowNull: false,
        type:  Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    });


    // Create Requests table
    await queryInterface.createTable('Quotes',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      valor_cuota: {
        type: Sequelize.INTEGER
      },
      plazo:{
        type: Sequelize.INTEGER
      },
      total:{
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type:  Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    // Drop Users table
    await queryInterface.dropTable('Users');

    // Drop Requests table
    await queryInterface.dropTable('Requests');
    
    // Drop Quotes table
    await queryInterface.dropTable('Quotes');
  }
};
