import {Model, Optional, DataTypes} from 'sequelize';
import { sequelize } from "../db";

interface IProduct {
    id: number;
    name: string;
    description: string;
    quantity: number;
    createdAt?: Date;
    updatedAt?: Date;

}

interface ProductCreationAttributes extends Optional<IProduct, 'id'> {}

export class Product extends Model<IProduct, ProductCreationAttributes> implements IProduct {
    id!: number;
    name!: string;
    description: string;
    quantity!: number;
    

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export const ProductInit = (sequelize) => {

    Product.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        quantity: DataTypes.INTEGER
       
    }, {
        sequelize,
        tableName: 'products',       
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        modelName: 'product'

    });
};


