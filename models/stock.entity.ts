import {DataTypes, Model, Optional} from 'sequelize';
import { sequelize } from "../db";

interface StockAttributes {
    id: number;
    name: string;
    description: string;
    category: string;
    quantity: number;
    product_id: number;
    status: boolean;
    createdAt?: Date;
    updatedAt?: Date;

}

interface StockCreationAttributes extends Optional<StockAttributes, 'id'> {}

export class Stock extends Model<StockAttributes, StockCreationAttributes> implements StockAttributes {
    category: string;

    id!: number;
    name!: string;
    description: string;
    quantity!: number;
    product_id!: number;
    status!: boolean;


    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Stock.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'product',
            key: 'id'
        },
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},
    
    {
        sequelize,
    tableName: 'stocks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    modelName: 'stock'

});




    
