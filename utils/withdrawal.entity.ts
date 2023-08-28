import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";
import { Product } from "../models/product.entity";
import { User } from "../models/user.entity";
import { Stock } from "../models/stock.entity";

interface IWithdrawal {
    id: number;
    userId: number;
    productId: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
}

export class Withdrawal extends Model<IWithdrawal> implements IWithdrawal {
    public id!: number;
    public userId!: number;
    public productId!: number;
    public quantity!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Withdrawal.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Usuarios',
            key: 'id'
        }
    },

    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Produtos',
            key: 'id'
        }

    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Produtos',
            key: 'quantity'
        }

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


    tableName: 'Saidas',
    modelName: 'withdrawal',
    sequelize
});

Withdrawal.belongsTo(User, { foreignKey: 'userId' });
Withdrawal.belongsTo(Product, { foreignKey: 'productId' });
Withdrawal.belongsTo(Stock, { foreignKey: 'productId' });












