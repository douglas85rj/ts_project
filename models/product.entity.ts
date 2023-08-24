import {Model, Optional, DataTypes} from 'sequelize';
import { sequelize } from "../db";


interface IProduct {
    id: number;
    name: string;
    description: string;
    quantity: number;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export type ProductCreationAttributes = Optional<IProduct, 'id'>;

export class Product extends Model<IProduct, ProductCreationAttributes> implements IProduct {
    public id!: number;
    public name!: string;
    public description!: string;
    public quantity!: number;
    public status!: boolean;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    name: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false    
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

    tableName: 'Produtos',
    modelName: 'product',
    sequelize,
});