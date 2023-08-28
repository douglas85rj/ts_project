import {Model, Optional, DataTypes} from 'sequelize';
import { sequelize } from "../db";

interface ICategory {
    id: number;
    name: string;
    description: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export type CategoryCreationAttributes = Optional<ICategory, 'id'>;

export class Category extends Model<ICategory, CategoryCreationAttributes> implements ICategory {
    public id!: number;
    public name!: string;
    public description!: string;
    public status!: boolean;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Category.init({
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
    }
}, {
    tableName: 'Categorias',
    modelName: 'Category',
    sequelize: sequelize
});


