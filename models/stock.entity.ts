import {DataTypes, Model, Optional} from 'sequelize';
import { sequelize } from "../db";

interface IStock {
    id: number;
    productId: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
}

export type StockCreationAttributes = Optional<IStock, 'id'>;

export class Stock extends Model<IStock, StockCreationAttributes> implements IStock {
    public id!: number;
    public productId!: number;
    public quantity!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Stock.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },

    productId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'Product',
            key: 'id'
        }
        
        },
    quantity: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      
  },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },

}, {

    tableName: 'Estoque',
    modelName: 'stock',
    sequelize: sequelize, // this bit is important
});





    
