import {DataTypes, Model, Optional} from 'sequelize';
import { sequelize } from "../db";
import { Product } from './product.entity';
import { User } from './user.entity';



interface IStockMovement {
    id: number;
    productId: number;
    userId: number;
    quantity: number;
    createdAt: Date;  
    updatedAt: Date;
}

export type StockMovementCreationAttributes = Optional<IStockMovement, 'id'>;

export class StockMovement extends Model<IStockMovement, StockMovementCreationAttributes> implements IStockMovement {

    public id!: number;
    public productId!: number;
    public userId!: number;
    public quantity!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

StockMovement.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
            },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
        }

    },
    createdAt: '',
    updatedAt: ''
}, {
    sequelize,
    tableName: 'stockMovement',
    createdAt: true,
    updatedAt: true,

});

StockMovement.belongsTo(Product, {foreignKey: 'productId'});
StockMovement.belongsTo(User, {foreignKey: 'userId'});


