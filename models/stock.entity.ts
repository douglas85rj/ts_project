import {DataTypes, Model, Optional} from 'sequelize';
import { sequelize } from "../db";
import { Product } from './product.entity';

interface IStock {
    id: number;
    productId: number;
    quantity: number;
    withdrawal: number;
    deposit: number;
    createdAt: Date;
    updatedAt: Date;


}

export type StockCreationAttributes = Optional<IStock, 'id'>;

export class Stock extends Model<IStock, StockCreationAttributes> implements IStock {
    public id!: number;
    public productId!: number;
    public quantity!: number;
    public withdrawal!: number;
    public deposit!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Stock.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
        allowNull: true,
        references: {
            model: 'Produtos',
            key: 'quantity'
        }       
      
   },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    withdrawal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Produtos',
            key: 'quantity'
        }
    },
    deposit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Produtos',
            key: 'quantity'
        }
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


Stock.belongsTo(Product, { foreignKey: 'productId' });
Product.hasMany(Stock, { foreignKey: 'productId' });






    
