import { Sequelize } from "sequelize";
import sequelize from "../database.js";

class Quotes extends Sequelize.Model {};

Quotes.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
    },
    valor_cuota: Sequelize.DataTypes.INTEGER,
    plazo: Sequelize.DataTypes.INTEGER,
    total: Sequelize.DataTypes.INTEGER,
    user_id: {
        allowNull: false,
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
    })

export default Quotes;