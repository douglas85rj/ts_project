import {DataTypes, Model, Optional} from 'sequelize';
import { sequelize } from "../db";
import { Product } from '../models/product.entity';
import { User } from '../models/user.entity';



interface IStockMovement {
    id: number;
    productId: number;
    userId: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
}

interface IStockMovementCreationAttributes extends Optional<IStockMovement, 'id'> {
    productId: number;
    userId: number;
    quantity: number;

}

export class StockMovement extends Model<IStockMovement, IStockMovementCreationAttributes> implements IStockMovement {
    public id!: number;
    public productId!: number;
    public userId!: number;
    public quantity!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

StockMovement.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },

        productId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Product,
                key: 'id'

            }

        },

        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: User,
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
            defaultValue: DataTypes.NOW,

        },

        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,

        },
        

    },



    {

        tableName: "stockMovement",
        modelName: "StockMovement",
        sequelize, // passing the `sequelize` instance is required
    }

);

StockMovement.sync({ force: true }).then(() => console.log("StockMovement table created"));




