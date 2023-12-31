import {Model, Optional, DataTypes} from 'sequelize';
import { sequelize } from "../db";
import { Category } from './category.entity';




interface IProduct {
    id: number;
    name: string;
    description: string;

    quantity: number;
    categoryId: number;
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
    public categoryId!: number;
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
    },
    
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,

    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    }

}, {
    tableName: 'Produtos',
    modelName: 'product',
    sequelize: sequelize
});

Product.belongsTo(Category, {foreignKey: 'categoryId', as: 'category'});


