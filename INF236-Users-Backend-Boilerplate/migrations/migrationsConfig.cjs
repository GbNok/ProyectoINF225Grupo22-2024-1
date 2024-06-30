const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  up: async (queryInterface, Sequelize) => {
    // Create Users table
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      rut: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      user_type: {
        type: Sequelize.INTEGER,
      }
    });

    // Create Requests table
    await queryInterface.createTable("Requests", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rut: {
        type: Sequelize.STRING,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      valor_credito: {
        type: Sequelize.INTEGER,
      },
      estado: {
        type: Sequelize.BOOLEAN,
      },
      tasa: {
        type: Sequelize.INTEGER,
      },
      plazo: {
        type: Sequelize.INTEGER,
      },
      id_ejecutivo: {
        allowNull: false,
        type:  Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }}
    });

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
    await queryInterface.dropTable("Users");

    // Drop Requests table
    await queryInterface.dropTable("Requests");

    await queryInterface.dropTable('Quotes');
  },
};
