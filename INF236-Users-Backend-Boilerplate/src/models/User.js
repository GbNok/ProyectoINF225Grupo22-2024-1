import { Sequelize } from 'sequelize';
import sequelize from '../database.js';

class User extends Sequelize.Model {};

User.init({
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  rut: Sequelize.DataTypes.STRING,
  nombre: Sequelize.DataTypes.STRING,
  password: Sequelize.DataTypes.STRING,
  email: {
    type: Sequelize.DataTypes.STRING,
    unique: true,
    allowNull: true
  },
  user_type: Sequelize.DataTypes.INTEGER,
  }
  , {
    sequelize,
    timestamps: false,
  }
);

export default User;
