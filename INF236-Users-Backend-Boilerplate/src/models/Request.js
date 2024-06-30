import { Sequelize } from "sequelize";
import sequelize from "../database.js";

class Request extends Sequelize.Model {};

Request.init({
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    rut: Sequelize.DataTypes.STRING,
    nombre: Sequelize.DataTypes.STRING,
    valor_credito: Sequelize.DataTypes.INTEGER,
    estado: Sequelize.DataTypes.BOOLEAN,
    tasa: Sequelize.DataTypes.INTEGER,
    plazo: Sequelize.DataTypes.INTEGER,
    id_ejecutivo: {
      type:  Sequelize.DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    }
    , {
      sequelize,
      timestamps: false,
    }
  );
  
  export default Request;